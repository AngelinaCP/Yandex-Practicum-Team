import type { FindOptions } from 'sequelize'
import Replies, { RepliesCreateAttributes } from '../../orm/models/replies'
import { col } from 'sequelize'
import type { CommentsAttributes } from '../../orm/models/comments'

class RepliesService {
  create(data: RepliesCreateAttributes) {
    return Replies.create(data)
  }

  find(parentCommentIndex: CommentsAttributes['commentIndex']) {
    const params: FindOptions = {
      where: parentCommentIndex ? { parentCommentIndex } : {},
      // raw: true,
      include: [
        { association: 'Users', attributes: [] },
        { association: 'ReplyComment', attributes: [] },
        { association: 'ParentComment', attributes: [] },
      ],
      attributes: [
        [col('"ReplyComment"."comment_id"'), 'index'],
        [col('"ReplyComment"."comment_text"'), 'message'],
        [col('"ReplyComment"."createdAt'), 'time'],
        [col('"Users"."user_display_name"'), 'author'],
        'parentCommentIndex',
      ],
    }
    return Replies.findAll(params)
  }
}

export const repliesService = new RepliesService()
