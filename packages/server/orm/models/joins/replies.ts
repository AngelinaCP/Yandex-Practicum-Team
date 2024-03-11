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
import CommentsTable from '../comments'

@Table({ tableName: 'replies' })
class Replies extends Model<
  InferAttributes<Replies>,
  InferCreationAttributes<Replies>
> {
  @PrimaryKey
  @AutoIncrement
  @Column({ type: DataType.INTEGER, field: 'reply_id' })
  declare replyId: CreationOptional<number>

  @BelongsTo(() => CommentsTable, { foreignKey: 'commentId', as: 'comment' })
  declare comment?: NonAttribute<CommentsTable>

  @BelongsTo(() => CommentsTable, 'parentCommentId')
  declare parentComment?: NonAttribute<CommentsTable>

  @Column({ type: DataType.INTEGER, field: 'comment_id' })
  declare commentId: number

  @Column({ type: DataType.INTEGER, field: 'parent_comment_id' })
  declare parentCommentId: number
}

export default Replies

export type RepliesAttributes = InferAttributes<Replies>
export type RepliesCreateAttributes = InferCreationAttributes<Replies>
