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

@Table({ tableName: 'forums', timestamps: true })
class Forums extends Model<
  InferAttributes<Forums>,
  InferCreationAttributes<Forums>
> {
  @PrimaryKey
  @AutoIncrement
  @Column({ type: DataType.INTEGER, field: 'forum_id' })
  declare forumId: CreationOptional<number>

  @Column({ type: DataType.STRING, field: 'forum_title' })
  declare forumTitle: string

  @Column({ type: DataType.STRING, field: 'forum_description' })
  declare forumDescription: string
}

export default Forums

export type ForumsAttributes = InferAttributes<Forums>
export type ForumsCreateAttributes = InferCreationAttributes<Forums>
