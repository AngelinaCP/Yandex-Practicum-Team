import Users, {
  UsersAttributes,
  UsersCreateAttributes,
} from '../../orm/models/users'

class UsersService {
  create(data: UsersCreateAttributes) {
    return Users.create(data)
  }

  find(authorIndex?: UsersAttributes['authorIndex']) {
    const params = {
      where: authorIndex ? { authorIndex } : {},
    }
    return authorIndex ? Users.findOne(params) : Users.findAll(params)
  }
}

export const usersService = new UsersService()
