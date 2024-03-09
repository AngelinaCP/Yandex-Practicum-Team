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

@Table({ tableName: 'forums_data', timestamps: false })
class ForumsData extends Model<
  InferAttributes<ForumsData>,
  InferCreationAttributes<ForumsData>
> {
  @PrimaryKey
  @AutoIncrement
  @Column({ type: DataType.INTEGER, field: 'forum_author_id' })
  declare forumAuthorId: CreationOptional<number>

  @BelongsTo(() => Forums, 'forumId')
  declare forum?: NonAttribute<Forums>

  @BelongsTo(() => Users, 'userId')
  declare user?: NonAttribute<Users>

  @Column({ type: DataType.INTEGER, field: 'forum_id' })
  declare forumId: number

  @Column({ type: DataType.INTEGER, field: 'user_id' })
  declare userId: number
}

export default ForumsData

export type ForumsDataAttributes = InferAttributes<ForumsData>
export type ForumsDataCreateAttributes = InferCreationAttributes<ForumsData>
