import Topic, {
  TopicDataAttributes,
  TopicDataCreateAttributes,
} from '../../orm/models/joins/topic'
import Users from '../../orm/models/users'
import Comments, { CommentsCreateAttributes } from '../../orm/models/comments'

class TopicService {
  addComment(data: CommentsCreateAttributes) {
    return Comments.create(data)
  }

  addTopicData(data: TopicDataCreateAttributes) {
    return Topic.create(data)
  }

  find(topicId?: TopicDataAttributes['topicId']) {
    return topicId
      ? Topic.findAll({
          where: { topicId },
          include: [{ model: Users }, { model: Comments }],
        })
      : Topic.findAll({
          include: [{ model: Users }, { model: Comments }],
        })
  }
}

export const topicService = new TopicService()
