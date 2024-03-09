import ForumData, {
  ForumDataAttributes,
  ForumDataCreateAttributes,
} from '../../orm/models/joins/forum'
import Topics, { TopicsCreateAttributes } from '../../orm/models/topics'
import Users from '../../orm/models/users'
import Forums from '../../orm/models/forums'

class ForumService {
  addTopic(data: TopicsCreateAttributes) {
    return Topics.create(data)
  }

  addForumData(data: ForumDataCreateAttributes) {
    return ForumData.create(data)
  }

  find(forumId?: ForumDataAttributes['forumId']) {
    return forumId
      ? ForumData.findAll({
          where: { forumId },
          include: [
            {
              model: Users,
              as: 'user',
            },
            {
              model: Topics,
              as: 'topics',
            },
            {
              model: Forums,
              attributes: ['forumTitle', 'forumDescription'],
            },
          ],
        })
      : ForumData.findAll({
          include: [
            {
              model: Users,
              as: 'user',
            },
            {
              model: Topics,
              as: 'topics',
            },
            {
              model: Forums,
              attributes: ['forumTitle', 'forumDescription'],
            },
          ],
        })
  }
}

export const forumService = new ForumService()
