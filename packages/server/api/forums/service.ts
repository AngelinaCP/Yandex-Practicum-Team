import ForumsData, {
  ForumsDataAttributes,
  ForumsDataCreateAttributes,
} from '../../orm/models/joins/forums'
import Users from '../../orm/models/users'
import Forums, { ForumsCreateAttributes } from '../../orm/models/forums'

class ForumsService {
  addForum(data: ForumsCreateAttributes) {
    return Forums.create(data)
  }

  addForumAuthor(data: ForumsDataCreateAttributes) {
    return ForumsData.create(data)
  }

  find(forumId?: ForumsDataAttributes['forumId']) {
    return forumId
      ? ForumsData.findOne({
          where: { forumId },
          include: [
            {
              model: Users,
              as: 'user',
            },
            {
              model: Forums,
              as: 'forum',
            },
          ],
        })
      : ForumsData.findAll({
          include: [
            {
              model: Users,
              as: 'user',
            },
            {
              model: Forums,
              as: 'forum',
            },
          ],
        })
  }
}

export const forumsService = new ForumsService()
