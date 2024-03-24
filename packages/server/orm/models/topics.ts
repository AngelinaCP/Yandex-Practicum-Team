import {
  Table,
  Model,
  PrimaryKey,
  Column,
  DataType,
  AutoIncrement,
  BelongsTo,
  HasMany,
} from 'sequelize-typescript'
import type {
  NonAttribute,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
} from 'sequelize'
import Comments from './comments'
import Users from './users'

@Table({ tableName: 'topics', timestamps: true })
class Topics extends Model<
  InferAttributes<Topics>,
  InferCreationAttributes<Topics>
> {
  @PrimaryKey
  @AutoIncrement
  @Column({ type: DataType.INTEGER, field: 'topic_id' })
  declare topicIndex?: CreationOptional<number>

  @Column({ type: DataType.STRING, field: 'topic_title' })
  declare title: string

  @Column({ type: DataType.STRING, field: 'topic_description' })
  declare description: string

  @BelongsTo(() => Users, {
    foreignKey: 'authorIndex',
    as: 'Users',
  })
  declare authorIndex: Users

  @HasMany(() => Comments, { foreignKey: 'topicIndex' })
  declare Comments?: NonAttribute<Comments[]>
}

export default Topics

export type TopicsAttributes = InferAttributes<Topics>
export type TopicsCreateAttributes = InferCreationAttributes<Topics>
