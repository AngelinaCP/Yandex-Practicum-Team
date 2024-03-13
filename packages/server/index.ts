import 'dotenv/config'
import cors from 'cors'
import { createServer as createViteServer } from 'vite'
import type { ViteDevServer } from 'vite'

import express from 'express'
import * as path from 'path'
import * as fs from 'fs'

import { PreloadStateByUrlService } from './store/preloadStateByUrlService'

import { sequelize } from './orm/sequelize'
import { router } from './router'

const isDev = process.env.NODE_ENV === 'development'

async function startServer() {
  const port = Number(process.env.SERVER_PORT) || 3001

  const distPath = path.dirname(require.resolve('client/dist/index.html'))
  const srcPath = path.dirname(require.resolve('client'))
  const ssrClientPath = require.resolve('client/ssr-dist/client.cjs')

  const app = express()
  app
    .use(cors())
    .use(express.json())
    .use(router)
    .use(express.static(path.resolve(srcPath, 'public')))

  let vite: ViteDevServer | undefined

  if (isDev) {
    vite = await createViteServer({
      server: { middlewareMode: true },
      root: srcPath,
      appType: 'custom',
    })

    app.use(vite.middlewares)
  }

  app.get('/api', (_, res) => {
    res.json('👋 Howdy from the server :)')
  })

  if (!isDev) {
    app.use('/assets', express.static(path.resolve(distPath, 'assets')))
  }

  app.use('*', async (req, res, next) => {
    const url = req.originalUrl

    try {
      let template: string

      if (!isDev) {
        template = fs.readFileSync(
          path.resolve(distPath, 'index.html'),
          'utf-8'
        )
      } else {
        template = fs.readFileSync(path.resolve(srcPath, 'index.html'), 'utf-8')

        template = await vite!.transformIndexHtml(url, template)
      }
      let render: (
        args: unknown
      ) => Promise<{ html: string; styleTags: string }>
      if (!isDev) {
        render = (await import(ssrClientPath)).getHtmlAndStyleTags
      } else {
        render = (await vite!.ssrLoadModule(path.resolve(srcPath, 'ssr.tsx')))
          .getHtmlAndStyleTags
      }

      const state = await new PreloadStateByUrlService(url).getState()

      const { html: appHtml, styleTags } = await render({
        path: url,
        state: state,
      })

      const appHeadScript = `
        ${styleTags}
        <script>
          window.__PRELOADED_STATE__ =
            ${JSON.stringify(state).replace(/</g, '\\u003c')}
        </script>`

      const html = template
        .replace(`<!--ssr-outlet-->`, appHtml)
        .replace(`<!--ssr-head-script-->`, appHeadScript)

      res.status(200).set({ 'Content-Type': 'text/html' }).end(html)
    } catch (e) {
      // If an error is caught, let Vite fix the stack trace so it maps back
      // to your actual source code.
      if (isDev) {
        vite!.ssrFixStacktrace(e as Error)
      }
      next(e)
    }
  })

  try {
    // await sequelize.sync({ force: true })
    await sequelize.sync()
  } catch (e) {
    console.error('failed to connect to db')
    console.error(e)
  }

  app.listen(port, () => {
    console.log(`  ➜ 🎸 Server is listening on port: ${port}`)
  })
}

startServer()
