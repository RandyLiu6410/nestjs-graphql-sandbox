import { IsEmail, IsPhoneNumber, ValidateNested } from 'class-validator';
import { CreateUserInput } from './create-user.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateUserInput extends PartialType(CreateUserInput) {
  @Field(() => Int)
  id: number;

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
