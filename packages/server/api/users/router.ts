import { Router } from 'express'
import { UsersApi } from './api'

const enum ENDPOINTS {
  API = '/users',
  ROOT = '/',
  USER_ID = '/:authorIndex',
}

const usersApiRouter = Router()

usersApiRouter
  .get(ENDPOINTS.USER_ID, UsersApi.getUser)
  .get(ENDPOINTS.ROOT, UsersApi.getUser)
  .post(ENDPOINTS.ROOT, UsersApi.createUser)

export function addUsersApiRoutes(router: Router) {
  router.use(ENDPOINTS.API, usersApiRouter)
  return router
}
