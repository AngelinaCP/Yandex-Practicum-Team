import { Router } from 'express'
// import { addForumApiRoutes } from './forum/router'
import { addUsersApiRoutes } from './users/router'
import { addTopicsApiRoutes } from './topics/router'
import { addCommentsApiRoutes } from './comments/router'
import { addRepliesApiRoutes } from './replies/router'
// import { addRepliesApiRoutes } from './replies/router'

const API_ENDPOINT = '/api'

const routeAdders = [
  addUsersApiRoutes,
  addTopicsApiRoutes,
  addCommentsApiRoutes,
  addRepliesApiRoutes,
  // addForumApiRoutes,
  // addTopicApiRoutes,
]

export const apiRouter = Router()

const apiRoutes = routeAdders.map(routerAdder => routerAdder(apiRouter))

apiRouter.use(API_ENDPOINT, apiRoutes)
