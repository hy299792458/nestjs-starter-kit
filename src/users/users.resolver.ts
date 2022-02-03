import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql'
import { User } from './models/user.model'
import { UsersService } from './users.service'
import { NewUserInput } from './dto/new-user.input'

@Resolver(() => User)
export class UsersResolver {
  constructor(private usersService: UsersService) {}

  @Query(() => User)
  async user(@Args('id', { type: () => Int }) id: number): Promise<User> {
    return this.usersService.findOneById(id)
  }

  @Query(() => [User])
  async users(): Promise<Array<User>> {
    return this.usersService.findMany()
  }

  @Mutation(() => User)
  async createUser(@Args('data') data: NewUserInput): Promise<User> {
    return this.usersService.addOne(data.firstName, data.lastName)
  }
}
