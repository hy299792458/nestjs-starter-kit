import { UsersResolver } from './users.resolver'
import { UsersService } from './users.service'
import { Module } from '@nestjs/common'

@Module({
  providers: [UsersResolver, UsersService],
})
export class UsersModule {}
