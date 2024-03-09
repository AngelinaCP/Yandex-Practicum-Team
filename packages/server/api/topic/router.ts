import { Router } from 'express'
import { TopicApi } from './api'

const enum ENDPOINTS {
  API = '/topic',
  ROOT = '/',
  TOPIC_ID = '/:topicId',
}

const topicApiRouter = Router()

topicApiRouter
  .get(ENDPOINTS.TOPIC_ID, (req, res) => {
    TopicApi.getTopic(req, res)
  })
  .get(ENDPOINTS.ROOT, (req, res) => {
    TopicApi.getAllTopics(req, res)
  })
  .post(ENDPOINTS.TOPIC_ID, (req, res) => {
    TopicApi.createComment(req, res)
  })

export function addTopicApiRoutes(router: Router) {
  router.use(ENDPOINTS.API, topicApiRouter)
  return router
}
