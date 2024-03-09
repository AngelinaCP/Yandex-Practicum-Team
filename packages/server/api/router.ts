import { Router } from 'express'
import { addForumsApiRoutes } from './forums/router'
import { addForumApiRoutes } from './forum/router'
import { addUsersApiRoutes } from './users/router'
import { addRepliesApiRoutes } from './replies/router'
import { addTopicApiRoutes } from './topic/router'

const API_ENDPOINT = '/api'

const routeAdders = [
  addUsersApiRoutes,
  addForumsApiRoutes,
  addForumApiRoutes,
  addTopicApiRoutes,
  addRepliesApiRoutes,
]

export const apiRouter = Router()

const apiRoutes = routeAdders.map(routerAdder => routerAdder(apiRouter))

apiRouter.use(API_ENDPOINT, apiRoutes)
