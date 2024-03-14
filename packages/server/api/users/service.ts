import Users, {
  UsersAttributes,
  UsersCreateAttributes,
} from '../../orm/models/users'

class UsersService {
  create(data: UsersCreateAttributes) {
    return Users.create(data)
  }

  find(userId?: UsersAttributes['authorIndex']) {
    const params = {
      where: userId ? { userId } : {},
    }
    return userId ? Users.findOne(params) : Users.findAll(params)
  }
}

export const usersService = new UsersService()
