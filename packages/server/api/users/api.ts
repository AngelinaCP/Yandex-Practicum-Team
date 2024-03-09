import type { Request, Response } from 'express'
import type { UsersCreateAttributes } from '../../orm/models/users'
import { usersService } from './service'

export class UsersApi {
  static getUsers = async (_request: Request, response: Response) => {
    try {
      const user = await usersService.find()
      response.json(user)
    } catch (error) {
      console.error('UsersApi.getUsers Error')
      console.error(error)
      response.json(null)
    }
  }

  static getUserById = async (
    request: Request<{ userId: string }>,
    response: Response
  ) => {
    try {
      const { userId } = request.params
      const user = await usersService.find(+userId)
      response.json(user)
    } catch (error) {
      console.error('UsersApi.getUserById Error')
      console.error(error)
      response.json(null)
    }
  }

  static createUser = async (
    request: TypedRequestBody<UsersCreateAttributes>,
    response: Response
  ) => {
    try {
      const { userId = undefined, userDisplayName, userYandexId } = request.body
      const data = { userId, userDisplayName, userYandexId }
      const user = await usersService.create(data)
      response.json(user)
    } catch (error) {
      console.error('UsersApi.createUser Error')
      console.error(error)
      response.json(null)
    }
  }
}
