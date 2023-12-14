import { Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { User } from '../entities/user.entity';
import { CommentService } from '../comment.service';
import { Comment } from '../entities/comment.entity';

@Resolver(() => User)
export class UserResolver {
  constructor(private readonly commentService: CommentService) {}

  @ResolveField(() => [Comment], {
    nullable: true,
    defaultValue: [],
  })
  public comments(@Parent() user: User) {
    return this.commentService.findAllByCreatorId(user.id);
  }
}
