import { Router } from 'express'
import { CommentsApi } from './api'

const enum ENDPOINTS {
  API = '/comments',
  ROOT = '/',
  TOPIC_ID = '/:topicIndex',
}

const topicsApiRouter = Router()

topicsApiRouter
  .get(ENDPOINTS.TOPIC_ID, CommentsApi.getComments) // get topic's comments
  .post(ENDPOINTS.TOPIC_ID, CommentsApi.addComment) // addTopic

export function addCommentsApiRoutes(router: Router) {
  router.use(ENDPOINTS.API, topicsApiRouter)
  return router
}
