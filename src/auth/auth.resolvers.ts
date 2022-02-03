import { AuthService } from './auth.service'
import { Args, Query, Resolver } from '@nestjs/graphql'
import { AuthenticationError } from 'apollo-server-express'
import { AuthInput } from './dto/auth-input'
import { User } from '../users/models/user'

@Resolver('Auth')
export class AuthResolver {
  constructor(private authService: AuthService) {}

  @Query(() => User)
  async login(@Args('user') loginInput: AuthInput): Promise<User> {
    const result = await this.authService.validateUser(
      loginInput.username,
      loginInput.password,
    )
    if (result) return result
    throw new AuthenticationError(
      'Could not log-in with the provided credentials',
    )
  }
}
