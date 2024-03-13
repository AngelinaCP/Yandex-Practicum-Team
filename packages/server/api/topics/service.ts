import type { FindOptions } from 'sequelize'
import Topics, {
  TopicsAttributes,
  TopicsCreateAttributes,
} from '../../orm/models/topics'
import { col } from 'sequelize'

class TopicsService {
  create(data: TopicsCreateAttributes) {
    return Topics.create(data)
  }

  find(topicId?: TopicsAttributes['topicIndex']) {
    const params: FindOptions = {
      where: topicId ? { topicId } : {},
      // raw: true,
      include: [
        { association: 'Users', attributes: [] },
        { association: 'Comments', include: [{ association: 'Replies' }] },
      ],
      attributes: [
        ['topic_id', 'index'],
        ['topic_title', 'title'],
        ['createdAt', 'time'],
        [col('"Users"."user_display_name"'), 'author'],
      ],
    }
    return topicId ? Topics.findOne(params) : Topics.findAll(params)
  }
}

export const topicsService = new TopicsService()
