import { Injectable } from '@nestjs/common';
import { CreateCommentInput } from './dto/create-comment.input';
import { UpdateCommentInput } from './dto/update-comment.input';
import { Comment } from './entities/comment.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CommentService {
  constructor(
    @InjectRepository(Comment) private commentsRepository: Repository<Comment>,
  ) {}

  async create(createCommentInput: CreateCommentInput) {
    const comment = new Comment();
    comment.content = createCommentInput.content;
    comment.creatorId = createCommentInput.creatorId;

    await this.commentsRepository.manager.save(comment);

    return comment;
  }

  findAll() {
    return this.commentsRepository.find();
  }

  findOne(id: number) {
    return this.commentsRepository.findOne({
      where: { id },
    });
  }

  update(id: number, updateCommentInput: UpdateCommentInput) {
    delete updateCommentInput.id;

    return this.commentsRepository.update(id, {
      ...updateCommentInput,
      updatedAt: new Date(),
    });
  }

  remove(id: number) {
    return this.commentsRepository.delete(id);
  }

  findAllByCreatorId(creatorId: number) {
    return this.commentsRepository.find({
      where: {
        creatorId,
      },
    });
  }
}
