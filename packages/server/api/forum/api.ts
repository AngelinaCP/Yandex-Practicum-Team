import type { Request, Response } from 'express'
import type { TopicsCreateAttributes } from '../../orm/models/topics'
import { forumService } from './service'

export class ForumApi {
  static getAllTopics = async (_request: Request, response: Response) => {
    try {
      const topics = await forumService.find()
      response.json(topics)
    } catch (error) {
      console.error('ForumApi.getAllTopics Error')
      console.error(error)
      response.json(null)
    }
  }

  static getTopics = async (
    request: Request<{ forumId: string }>,
    response: Response
  ) => {
    try {
      const { forumId } = request.params
      const topic = await forumService.find(+forumId)
      response.json(topic)
    } catch (error) {
      console.error('ForumApi.getTopics Error')
      console.error(error)
      response.json(null)
    }
  }

  static createTopic = async (
    request: TypedRequest<
      TopicsCreateAttributes & { userId: string },
      { forumId: string }
    >,
    response: Response
  ) => {
    try {
      const forumId = +request.params.forumId
      const { topicTitle, topicText, userId } = request.body
      const data = { topicId: undefined, topicTitle, topicText }
      const topic = await forumService.addTopic(data)

      await forumService.addForumData({
        forumDataId: undefined,
        topicId: topic.topicId,
        userId: +userId,
        forumId,
      })
      response.json(topic)
    } catch (error) {
      console.error('ForumApi.createTopic Error')
      console.error(error)
      response.json(null)
    }
  }
}
