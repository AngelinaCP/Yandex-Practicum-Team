import { Router } from 'express'
import { RepliesApi } from './api'

const enum ENDPOINTS {
  API = '/replies',
  ROOT = '/',
  COMMENT_ID = '/:commentId',
}

const repliesApiRouter = Router()

repliesApiRouter
  .get(ENDPOINTS.COMMENT_ID, (req, res) => {
    RepliesApi.getReplies(req, res)
  })
  .get(ENDPOINTS.ROOT, (req, res) => {
    RepliesApi.getAllReplies(req, res)
  })
  .post(ENDPOINTS.COMMENT_ID, (req, res) => {
    RepliesApi.createReply(req, res)
  })

export function addRepliesApiRoutes(router: Router) {
  router.use(ENDPOINTS.API, repliesApiRouter)
  return router
}
