import type { NextFunction, Request, Response } from 'express'
import type { CommentsCreateAttributes } from '../../orm/models/comments'
import { repliesService } from './service'
import { commentsService } from '../../api/comments/service'
import type { RepliesCreateAttributes } from '../../orm/models/replies'

export class RepliesApi {
  static getReplies = async (
    request: Request<{ commentId?: string }>,
    response: Response,
    next: NextFunction
  ) => {
    try {
      const { commentId } = request.params
      if (!commentId) {
        next()
      } else {
        const topic = await repliesService.find(+commentId)
        response.json(topic)
      }
    } catch (error) {
      console.error('RepliesApi.getReplies Error')
      console.error(error)
      next(error)
    }
  }

  static addReply = async (
    request: TypedRequest<
      CommentsCreateAttributes,
      { commentIndex: RepliesCreateAttributes['parentCommentId'] }
    >,
    response: Response,
    next: NextFunction
  ) => {
    try {
      const { topicIndex, message, authorIndex } = request.body
      const { commentIndex: parentCommentId } = request.params
      const data = { authorIndex, topicIndex, message }
      //@ts-ignore
      const comment = await commentsService.create(data)
      const reply = await repliesService.create({
        parentCommentId,
        commentIndex: comment.commentIndex,
        replyIndex: undefined,
        authorIndex,
      })
      console.log(reply)
      response.json(reply)
    } catch (error) {
      console.error('RepliesApi.addComment Error')
      console.error(error)
      next(error)
    }
  }
}
