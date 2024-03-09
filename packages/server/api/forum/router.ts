import { Router } from 'express'
import { ForumApi } from './api'

const enum ENDPOINTS {
  API = '/forum',
  ROOT = '/',
  FORUM_ID = '/:forumId',
}

const forumApiRouter = Router()

forumApiRouter
  .get(ENDPOINTS.FORUM_ID, (req, res) => {
    /* get topics of forum id */
    ForumApi.getTopics(req, res)
  })
  .get(ENDPOINTS.ROOT, (req, res) => {
    /* get all topics */
    ForumApi.getAllTopics(req, res)
  })
  .post(ENDPOINTS.FORUM_ID, (req, res) => {
    ForumApi.createTopic(req, res)
  })

export function addForumApiRoutes(router: Router) {
  router.use(ENDPOINTS.API, forumApiRouter)
  return router
}
