import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateCommentInput {
  @Field(() => Int, { description: "Creator's ID" })
  creatorId: number;

  @Field(() => String, { description: "Comment's content" })
  content: string;
}
