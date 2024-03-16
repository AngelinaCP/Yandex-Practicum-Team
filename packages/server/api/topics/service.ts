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

  find(topicIndex?: TopicsAttributes['topicIndex']) {
    const params: FindOptions = {
      where: topicIndex ? { topicIndex } : {},
      // raw: true,
      include: [
        { association: 'Users', attributes: [] },
        { association: 'Comments', include: [{ association: 'Replies' }] },
      ],
      attributes: [
        ['topic_id', 'index'],
        ['topic_title', 'title'],
        ['topic_description', 'description'],
        ['createdAt', 'time'],
        [col('"Users"."user_display_name"'), 'author'],
      ],
    }
    return topicIndex ? Topics.findOne(params) : Topics.findAll(params)
  }
}

export const topicsService = new TopicsService()
