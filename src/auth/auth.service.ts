import { Injectable } from '@nestjs/common'
import { User } from '../users/models/user'

@Injectable()
export class AuthService {
  async validateUser(username: string, password: string): Promise<User> {
    return {
      id: 1,
      firstName: 'f',
      lastName: 'l',
    }
  }
}
