import { InputType, Field } from '@nestjs/graphql'

@InputType()
export class UserDto {
  @Field()
  firstName: string

  @Field()
  lastName: string
}
