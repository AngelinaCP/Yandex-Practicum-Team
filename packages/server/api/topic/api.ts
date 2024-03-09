import type { Request, Response } from 'express'
import type { CommentsCreateAttributes } from '../../orm/models/comments'
import { topicService } from './service'

export class TopicApi {
  static getAllTopics = async (_request: Request, response: Response) => {
    try {
      const topics = await topicService.find()
      response.json(topics)
    } catch (error) {
      console.error('TopicApi.getAllTopics Error')
      console.error(error)
      response.json(null)
    }
  }

  static getTopic = async (
    request: Request<{ topicId: string }>,
    response: Response
  ) => {
    try {
      const { topicId } = request.params
      const topic = await topicService.find(+topicId)
      response.json(topic)
    } catch (error) {
      console.error('TopicApi.getTopic Error')
      console.error(error)
      response.json(null)
    }
  }

  static createComment = async (
    request: TypedRequest<
      CommentsCreateAttributes & { userId: string },
      { topicId: string }
    >,
    response: Response
  ) => {
    try {
      const topicId = +request.params.topicId
      const { commentText, userId } = request.body
      const data = { commentId: undefined, commentText }
      const comment = await topicService.addComment(data)
      await topicService.addTopicData({
        topicDataId: undefined,
        commentId: comment.commentId,
        userId: +userId,
        topicId,
      })
      response.json(comment)
    } catch (error) {
      console.error('TopicApi.createComment Error')
      console.error(error)
      response.json(null)
    }
  }
}
