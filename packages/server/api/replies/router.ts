import { Router } from 'express'
import { RepliesApi } from './api'

const enum ENDPOINTS {
  API = '/replies',
  ROOT = '/',
  COMMENT_ID = '/:commentIndex',
}

const topicsApiRouter = Router()

topicsApiRouter
  .get(ENDPOINTS.COMMENT_ID, RepliesApi.getReplies)
  .post(ENDPOINTS.COMMENT_ID, RepliesApi.addReply)

export function addRepliesApiRoutes(router: Router) {
  router.use(ENDPOINTS.API, topicsApiRouter)
  return router
}
