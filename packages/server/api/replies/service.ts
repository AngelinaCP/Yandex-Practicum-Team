import RepliesTable, {
  RepliesCreateAttributes,
} from '../../orm/models/joins/replies'
import CommentsTable from '../../orm/models/comments'

class RepliesService {
  addReply(data: RepliesCreateAttributes) {
    return RepliesTable.create(data)
  }

  getAllReplies() {
    return RepliesTable.findAll()
  }

  getReplies(parentCommentId: number) {
    return RepliesTable.findAll({
      where: { parentCommentId },
      include: [
        {
          model: CommentsTable,
          as: 'comment',
        },
      ],
    })
  }
}

export const repliesService = new RepliesService()
