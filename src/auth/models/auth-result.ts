import { User } from '../../users/models/user'

export class AuthResult {
  user: User
  token: string
}
