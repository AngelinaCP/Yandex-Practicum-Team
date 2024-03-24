import type { FindOptions } from 'sequelize'
import Comments, { CommentsCreateAttributes } from '../../orm/models/comments'
import { col } from 'sequelize'
import type { TopicsAttributes } from '../../orm/models/topics'

class CommentsService {
  create(data: CommentsCreateAttributes) {
    return Comments.create(data)
  }

  find(index: TopicsAttributes['topicIndex']) {
    const params: FindOptions = {
      where: { index },
      // raw: true,
      include: [
        { association: 'Users', attributes: [] },
        { association: 'Replies', attributes: [] },
      ],
      attributes: [
        ['comment_id', 'index'],
        ['comment_text', 'message'],
        ['createdAt', 'time'],
        [col('"Users"."user_display_name"'), 'author'],
      ],
    }
    return Comments.findAll(params)
  }
}

export const commentsService = new CommentsService()
