import {
  Table,
  Model,
  BelongsTo,
  DataType,
  Column,
  PrimaryKey,
  AutoIncrement,
} from 'sequelize-typescript'
import type {
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
  NonAttribute,
} from 'sequelize'
// import Commentss from '../aggregators/topicComments'
import Comments from './comments'
import Users from './users'

@Table({ tableName: 'replies', timestamps: false })
class Replies extends Model<
  InferAttributes<Replies>,
  InferCreationAttributes<Replies>
> {
  @PrimaryKey
  @AutoIncrement
  @Column({ type: DataType.INTEGER, field: 'reply_id' })
  declare replyIndex: CreationOptional<number>

  @BelongsTo(() => Comments, { foreignKey: 'commentIndex', as: 'ReplyComment' })
  declare message?: NonAttribute<Comments>

  @BelongsTo(() => Comments, {
    foreignKey: 'commentIndex',
    as: 'ParentComment',
  })
  declare parentCommentIndex?: NonAttribute<Comments>

  @Column({ type: DataType.INTEGER, field: 'comment_id' })
  declare commentIndex: number

  @Column({ type: DataType.INTEGER, field: 'parent_comment_id' })
  declare parentCommentId: number

  @BelongsTo(() => Users, {
    foreignKey: 'authorId',
    as: 'author',
  })
  declare authorIndex: Users
}

export default Replies

export type RepliesAttributes = InferAttributes<Replies>
export type RepliesCreateAttributes = InferCreationAttributes<Replies>
