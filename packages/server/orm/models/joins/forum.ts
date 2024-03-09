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
import Users from '../users'
import Forums from '../forums'
import Topics from '../topics'

@Table({ tableName: 'forum_data', timestamps: false })
class ForumData extends Model<
  InferAttributes<ForumData>,
  InferCreationAttributes<ForumData>
> {
  @PrimaryKey
  @AutoIncrement
  @Column({ type: DataType.INTEGER, field: 'forum_data_id' })
  declare forumDataId: CreationOptional<number>

  @BelongsTo(() => Topics, 'topicId')
  declare topics?: NonAttribute<Topics>

  @BelongsTo(() => Users, 'userId')
  declare user?: NonAttribute<Users>

  @BelongsTo(() => Forums, 'forumId')
  declare forum?: NonAttribute<Forums>

  @Column({ type: DataType.INTEGER, field: 'topic_id' })
  declare topicId: number

  @Column({ type: DataType.INTEGER, field: 'user_id' })
  declare userId: number

  @Column({ type: DataType.INTEGER, field: 'forum_id' })
  declare forumId: number
}

export default ForumData

export type ForumDataAttributes = InferAttributes<ForumData>
export type ForumDataCreateAttributes = InferCreationAttributes<ForumData>
