import { ObjectType, Field, Int, Directive } from '@nestjs/graphql';
import { Comment } from './comment.entity';

@ObjectType()
@Directive('@extends')
@Directive('@key(fields: "id")')
export class User {
  @Field(() => Int, { description: 'User ID' })
  @Directive('@external')
  id: number;

  @Field(() => [Comment])
  comments: Array<Comment>;
}
