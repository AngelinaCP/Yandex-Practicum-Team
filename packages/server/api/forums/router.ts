import { Router } from 'express'
import { ForumsApi } from './api'

const enum ENDPOINTS {
  API = '/forums',
  ROOT = '/',
  FORUM_ID = '/:forumId',
}

const forumsApiRouter = Router()

forumsApiRouter
  .get(ENDPOINTS.FORUM_ID, (req, res) => {
    ForumsApi.getForumById(req, res)
  })
  .get(ENDPOINTS.ROOT, (req, res) => {
    ForumsApi.getAllForums(req, res)
  })
  .post(ENDPOINTS.ROOT, (req, res) => {
    ForumsApi.createForum(req, res)
  })

export function addForumsApiRoutes(router: Router) {
  router.use(ENDPOINTS.API, forumsApiRouter)
  return router
}
