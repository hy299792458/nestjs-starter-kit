import { User } from './models/user.model'

export class UsersService {
  async findOneById(id: number): Promise<User> {
    return {
      firstName: `first name for ${id}`,
      id,
      lastName: `last name for ${id}`,
    }
  }

  async findMany(): Promise<Array<User>> {
    return [
      { firstName: 'first name 1', id: 1, lastName: 'last name 1' },
      { firstName: 'first name 2', id: 2, lastName: 'last name 2' },
    ]
  }
}
