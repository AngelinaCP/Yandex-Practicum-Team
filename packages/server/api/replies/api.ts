import type { Request, Response } from 'express'
import type { CommentsCreateAttributes } from '../../orm/models/comments'
import { repliesService } from './service'
import { topicService } from '../topic/service'

export class RepliesApi {
  static getAllReplies = async (_request: Request, response: Response) => {
    try {
      const replies = await repliesService.getAllReplies()
      response.json(replies)
    } catch (error) {
      console.error('RepliesApi.getReplies Error')
      console.error(error)
      response.json(null)
    }
  }

  static getReplies = async (
    request: Request<{ commentId: string }>,
    response: Response
  ) => {
    try {
      const { commentId } = request.params
      const reply = await repliesService.getReplies(+commentId)
      response.json(reply)
    } catch (error) {
      console.error('RepliesApi.getReplies Error')
      console.error(error)
      response.json(null)
    }
  }

  static createReply = async (
    request: TypedRequest<CommentsCreateAttributes, { commentId: string }>,
    response: Response
  ) => {
    try {
      const { commentId: parentCommentId } = request.params
      const { commentText } = request.body
      const data = { commentId: undefined, commentText }
      const newComment = await topicService.addComment(data)
      await repliesService.addReply({
        replyId: undefined,
        commentId: newComment.commentId,
        parentCommentId: +parentCommentId,
      })
      response.json(newComment)
    } catch (error) {
      console.error('RepliesApi.createReply Error')
      console.error(error)
      response.json(null)
    }
  }
}
