import { User } from './models/user.model'

const users = [
  { id: 1, firstName: 'F1', lastName: 'L1' },
  { id: 2, firstName: 'F2', lastName: 'L2' },
]

export class UsersService {
  async findOneById(id: number): Promise<User> {
    return {
      id,
      firstName: `F: ${id}`,
      lastName: `L: ${id}`,
    }
  }

  async addOne(firstName: string, lastName: string): Promise<User> {
    const id = users.length
    users.push({ id, firstName, lastName })
    return users[id]
  }

  async findMany(): Promise<Array<User>> {
    return users
  }
}
