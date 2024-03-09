import {
  Table,
  Model,
  PrimaryKey,
  Column,
  DataType,
  AutoIncrement,
  HasMany,
} from 'sequelize-typescript'
import type {
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
} from 'sequelize'
import Topic from './joins/topic'

@Table({ tableName: 'topics', timestamps: true })
class Topics extends Model<
  InferAttributes<Topics>,
  InferCreationAttributes<Topics>
> {
  @PrimaryKey
  @AutoIncrement
  @HasMany(() => Topic, { foreignKey: 'topic_id', as: 'topicData' })
  @Column({ type: DataType.INTEGER, field: 'topic_id' })
  declare topicId: CreationOptional<number>

  @Column({ type: DataType.STRING, field: 'topic_title' })
  declare topicTitle: string

  @Column({ type: DataType.STRING, field: 'topic_text' })
  declare topicText: string
}

export default Topics

export type TopicsAttributes = InferAttributes<Topics>
export type TopicsCreateAttributes = InferCreationAttributes<Topics>
