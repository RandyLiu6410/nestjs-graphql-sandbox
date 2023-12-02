import { InputType, Field } from '@nestjs/graphql';
import { IsEmail, IsPhoneNumber } from 'class-validator';

@InputType()
export class CreateUserInput {
  @Field(() => String, { description: "User's first name" })
  firstName: string;

  @Field(() => String, { description: "User's last name" })
  lastName: string;

  @Field(() => String, { description: "User's phone" })
  @IsPhoneNumber('TW')
  phone: string;

  @Field(() => String, { description: "User's email" })
  @IsEmail()
  email: string;
}
