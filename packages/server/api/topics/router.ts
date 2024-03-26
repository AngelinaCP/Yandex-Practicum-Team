import { Router } from 'express'
import { TopicsApi } from './api'

const enum ENDPOINTS {
  API = '/topics',
  ROOT = '/',
  TOPIC_ID = '/:topicIndex',
}

const topicsApiRouter = Router()

topicsApiRouter
  .get(ENDPOINTS.TOPIC_ID, TopicsApi.getTopic) // get all data about topic
  .get(ENDPOINTS.ROOT, TopicsApi.getTopic) // get all data about all topics
  .post(ENDPOINTS.ROOT, TopicsApi.addTopic) // addTopic

export function addTopicsApiRoutes(router: Router) {
  router.use(ENDPOINTS.API, topicsApiRouter)
  return router
}
