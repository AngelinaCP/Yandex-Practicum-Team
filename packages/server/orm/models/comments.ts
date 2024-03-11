import {
  Table,
  Model,
  PrimaryKey,
  Column,
  DataType,
  AutoIncrement,
} from 'sequelize-typescript'
import type {
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
} from 'sequelize'

@Table({ tableName: 'comments', timestamps: true })
class Comments extends Model<
  InferAttributes<Comments>,
  InferCreationAttributes<Comments>
> {
  @PrimaryKey
  @AutoIncrement
  @Column({ type: DataType.INTEGER, field: 'comment_id' })
  declare commentId: CreationOptional<number>

  @Column({ type: DataType.CHAR, field: 'comment_text' })
  declare commentText: string
}

export default Comments

export type CommentsAttributes = InferAttributes<Comments>
export type CommentsCreateAttributes = InferCreationAttributes<Comments>
