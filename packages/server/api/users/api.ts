import type { Request, Response } from 'express'
import type { UsersCreateAttributes } from '../../orm/models/users'
import { usersService } from './service'

export class UsersApi {
  static getUser = async (
    request: Request<{ authorIndex?: string }>,
    response: Response
  ) => {
    try {
      const { authorIndex } = request.params
      const user = await usersService.find(
        authorIndex ? +authorIndex : undefined
      )
      response.json(user)
    } catch (error) {
      console.error('UsersApi.getUser Error')
      console.error(error)
      response.json(null)
    }
  }

  static createUser = async (
    request: TypedRequestBody<UsersCreateAttributes>,
    response: Response
  ) => {
    try {
      const { authorIndex = undefined, author, userYandexId } = request.body
      const data = { authorIndex, author, userYandexId }
      console.log(data)
      const user = await usersService.create(data)
      response.json(user)
    } catch (error) {
      console.error('UsersApi.createUser Error')
      console.error(error)
      response.json(null)
    }
  }
}
