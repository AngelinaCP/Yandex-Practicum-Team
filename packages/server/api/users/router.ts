import { Router } from 'express'
import { UsersApi } from './api'

const enum ENDPOINTS {
  API = '/users',
  ROOT = '/',
  USER_ID = '/:userId',
}

const usersApiRouter = Router()

usersApiRouter
  .get(ENDPOINTS.USER_ID, (req, res) => {
    UsersApi.getUserById(req, res)
  })
  .get(ENDPOINTS.ROOT, (req, res) => {
    UsersApi.getUsers(req, res)
  })
  .post(ENDPOINTS.ROOT, (req, res) => {
    UsersApi.createUser(req, res)
  })

export function addUsersApiRoutes(router: Router) {
  router.use(ENDPOINTS.API, usersApiRouter)
  return router
}
