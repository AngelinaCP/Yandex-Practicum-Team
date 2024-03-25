import type { NextFunction, Request, Response } from 'express'
import type { TopicsCreateAttributes } from '../../orm/models/topics'
import { topicsService } from './service'

export class TopicsApi {
  static getTopic = async (
    request: Request<{ topicIndex?: string }>,
    response: Response,
    next: NextFunction
  ) => {
    try {
      const { topicIndex } = request.params
      const topic = await topicsService.find(
        topicIndex ? +topicIndex : undefined
      )
      response.json(topic)
    } catch (error) {
      console.error('TopicsApi.getTopic Error')
      console.error(error)
      next(error)
    }
  }

  static addTopic = async (
    request: TypedRequestBody<TopicsCreateAttributes>,
    response: Response,
    next: NextFunction
  ) => {
    try {
      const {
        topicIndex = undefined,
        authorIndex,
        title,
        description,
      } = request.body
      const data = { topicIndex, authorIndex, title, description }
      const user = await topicsService.create(data)
      response.json(user)
    } catch (error) {
      console.error('TopicsApi.addTopic Error')
      console.error(error)
      next(error)
    }
  }
}
