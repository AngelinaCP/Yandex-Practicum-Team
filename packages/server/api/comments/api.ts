import type { NextFunction, Request, Response } from 'express'
import type { CommentsCreateAttributes } from '../../orm/models/comments'
import { commentsService } from './service'

export class CommentsApi {
  static getComments = async (
    request: Request<{ topicIndex?: string }>,
    response: Response,
    next: NextFunction
  ) => {
    try {
      const { topicIndex } = request.params
      const topic = await commentsService.find(
        topicIndex ? +topicIndex : undefined
      )
      response.json(topic)
    } catch (error) {
      console.error('CommentsApi.getComments Error')
      console.error(error)
      next(error)
    }
  }

  static addComment = async (
    request: TypedRequest<
      CommentsCreateAttributes,
      CommentsCreateAttributes['topicIndex']
    >,
    response: Response,
    next: NextFunction
  ) => {
    try {
      const { commentIndex = undefined, message, authorIndex } = request.body
      const { topicIndex } = request.params
      const data = { commentIndex, topicIndex, authorIndex, message }
      //@ts-ignore
      const user = await commentsService.create(data)
      response.json(user)
    } catch (error) {
      console.error('CommentsApi.addComment Error')
      console.error(error)
      next(error)
    }
  }
}
