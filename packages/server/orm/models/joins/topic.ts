import {
  Table,
  Model,
  PrimaryKey,
  Column,
  DataType,
  AutoIncrement,
  BelongsTo,
} from 'sequelize-typescript'
import type {
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
  NonAttribute,
} from 'sequelize'
import Users from '../users'
import Topics from '../topics'
import Comments from '../comments'

@Table({ tableName: 'topic_data' })
class TopicData extends Model<
  InferAttributes<TopicData>,
  InferCreationAttributes<TopicData>
> {
  @PrimaryKey
  @AutoIncrement
  @Column({ type: DataType.INTEGER, field: 'topic_data_id' })
  declare topicDataId: CreationOptional<number>

  @BelongsTo(() => Users, 'userId')
  declare user: NonAttribute<Users>

  @Column({ type: DataType.INTEGER, field: 'user_id' })
  declare userId: number

  @BelongsTo(() => Topics, { foreignKey: 'topicId', as: 'topics' })
  declare topics: NonAttribute<Topics>

  @Column({ type: DataType.INTEGER, field: 'topic_id' })
  declare topicId: number

  @BelongsTo(() => Comments, 'commentId')
  declare comments: NonAttribute<Comments>

  @Column({ type: DataType.INTEGER, field: 'comment_id' })
  declare commentId: number
}

export default TopicData

export type TopicDataAttributes = InferAttributes<TopicData>
export type TopicDataCreateAttributes = InferCreationAttributes<TopicData>
