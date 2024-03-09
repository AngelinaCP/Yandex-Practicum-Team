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

@Table({ tableName: 'users', timestamps: true })
class Users extends Model<UsersAttributes, UsersCreateAttributes> {
  @PrimaryKey
  @AutoIncrement
  @Column({ type: DataType.INTEGER, field: 'user_id' })
  declare userId: CreationOptional<number>

  @Column({ type: DataType.STRING, field: 'user_display_name' })
  declare userDisplayName: string

  @Column({ type: DataType.INTEGER, field: 'user_yandex_id' })
  declare userYandexId: number
}

export default Users

export type UsersAttributes = InferAttributes<Users>
export type UsersCreateAttributes = InferCreationAttributes<Users>
