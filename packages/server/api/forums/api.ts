import type { Request, Response } from 'express'
import type { ForumsCreateAttributes } from '../../orm/models/forums'
import { forumsService } from './service'

export class ForumsApi {
  static getAllForums = async (_request: Request, response: Response) => {
    try {
      const forum = await forumsService.find()
      response.json(forum)
    } catch (error) {
      console.error('ForumsApi.getAllForums Error')
      console.error(error)
      response.json(null)
    }
  }

  static getForumById = async (
    request: Request<{ forumId: string }>,
    response: Response
  ) => {
    try {
      const { forumId } = request.params
      const forum = await forumsService.find(+forumId)
      response.json(forum)
    } catch (error) {
      console.error('ForumsApi.getForumById Error')
      console.error(error)
      response.json(null)
    }
  }

  static createForum = async (
    request: TypedRequestBody<ForumsCreateAttributes & { userId: string }>,
    response: Response
  ) => {
    try {
      const { forumTitle, forumDescription, userId } = request.body
      const forum = await forumsService.addForum({
        forumId: undefined,
        forumTitle,
        forumDescription,
      })
      await forumsService.addForumAuthor({
        forumAuthorId: undefined,
        forumId: forum.forumId,
        userId: +userId,
      })
      response.json(forum)
    } catch (error) {
      console.error('ForumsApi.createForum Error')
      console.error(error)
      response.json(null)
    }
  }
}
