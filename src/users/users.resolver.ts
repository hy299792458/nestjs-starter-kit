import { Args, Context, Int, Mutation, Query, Resolver } from '@nestjs/graphql'
import { User } from './models/user'
import { UsersService } from './users.service'
import { NewUserInput } from './dto/new-user.input'
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard'
import { Logger, UseGuards } from '@nestjs/common'

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
  @UseGuards(JwtAuthGuard)
  async createUser(
    @Args('data') data: NewUserInput,
    @Context() context,
  ): Promise<User> {
    Logger.debug(context.user)
    return this.usersService.addOne(data.firstName, data.lastName)
  }
}
