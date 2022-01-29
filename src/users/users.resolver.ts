import { Args, Int, Query, Resolver } from '@nestjs/graphql'
import { User } from './models/user.model'
import { UsersService } from './users.service'

@Resolver((of) => User)
export class UsersResolver {
  constructor(private usersService: UsersService) {}

  @Query((returns) => User)
  async author(@Args('id', { type: () => Int }) id: number): Promise<User> {
    return this.usersService.findOneById(id)
  }

  @Query((returns) => [User])
  async authors(): Promise<Array<User>> {
    return this.usersService.findMany()
  }
}
