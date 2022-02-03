import { User } from './models/user'

const users = [
  { id: 1, firstName: 'F1', lastName: 'L1' },
  { id: 2, firstName: 'F2', lastName: 'L2' },
]

export class UsersService {
  async addOne(firstName: string, lastName: string): Promise<User> {
    const id = users.length
    users.push({ id, firstName, lastName })
    return users[id]
  }

  async findOneById(id: number): Promise<User | null> {
    users.forEach((user) => {
      if (user.id === id) return user
    })
    return null
  }

  async updateById(
    id: number,
    { firstName, lastName }: { firstName: string; lastName: string },
  ): Promise<User | null> {
    const target = await this.findOneById(id)
    target.firstName = firstName
    target.lastName = lastName
    return target
  }

  async findMany(): Promise<Array<User>> {
    return users
  }
}
