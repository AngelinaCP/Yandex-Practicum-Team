import {
  Table,
  Model,
  PrimaryKey,
  Column,
  DataType,
  AutoIncrement,
  Unique,
  BelongsTo,
  HasMany,
} from 'sequelize-typescript'
import {
  type InferAttributes,
  type InferCreationAttributes,
  type CreationOptional,
  type NonAttribute,
  DataTypes,
} from 'sequelize'
import Users from './users'
import Replies from './replies'
import Topics from './topics'

@Table({ tableName: 'comments', timestamps: true })
class Comments extends Model<
  InferAttributes<Comments>,
  InferCreationAttributes<Comments>
> {
  @PrimaryKey
  @Unique
  @AutoIncrement
  @Column({ type: DataType.INTEGER, field: 'comment_id' })
  declare commentIndex: CreationOptional<number>

  @Column({ type: DataType.CHAR, field: 'comment_text' })
  declare message: string

  @Column(DataTypes.INTEGER)
  declare topicIndex: Topics

  @BelongsTo(() => Users, { foreignKey: 'authorIndex', as: 'Users' })
  declare authorIndex: Users

  @HasMany(() => Replies, { foreignKey: 'replyIndex', as: 'Replies' })
  declare replyIndex?: NonAttribute<Replies[]>
}

export default Comments

export type CommentsAttributes = InferAttributes<Comments>
export type CommentsCreateAttributes = InferCreationAttributes<Comments>
