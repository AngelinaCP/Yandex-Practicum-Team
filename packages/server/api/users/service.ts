import UsersTable, {
  UsersAttributes,
  UsersCreateAttributes,
} from '../../orm/models/users'

class UsersService {
  create(data: UsersCreateAttributes) {
    return UsersTable.create(data)
  }

  find(userId?: UsersAttributes['userId']) {
    return userId
      ? UsersTable.findOne({
          where: { userId },
        })
      : UsersTable.findAll()
  }
}

export const usersService = new UsersService()
