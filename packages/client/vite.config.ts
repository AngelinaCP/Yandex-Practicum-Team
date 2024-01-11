import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv'
import { resolve } from 'path'
import stylexPlugin from '@stylexjs/rollup-plugin'
dotenv.config()

const src = resolve(__dirname, 'src')

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: Number(process.env.CLIENT_PORT) || 3000,
  },
  define: {
    __SERVER_PORT__: process.env.SERVER_PORT,
  },
  plugins: [
    react(),
    stylexPlugin({
      dev: true,
      unstable_moduleResolution: {
        type: 'commonJS',
        rootDir: src,
      },
    }),
  ],
})
