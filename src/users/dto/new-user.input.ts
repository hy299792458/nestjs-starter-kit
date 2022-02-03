import { InputType, Field } from '@nestjs/graphql'

@InputType()
export class NewUserInput {
  @Field()
  firstName: string

  @Field()
  lastName: string
}
