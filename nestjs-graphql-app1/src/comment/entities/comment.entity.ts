import { ObjectType, Field, Int } from '@nestjs/graphql';
import { User } from 'src/user/entities/user.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@ObjectType()
@Entity()
export class Comment {
  @Field(() => Int, { description: 'Comment ID' })
  @PrimaryGeneratedColumn()
  id: number;

  @Field(() => User, { description: "Comment's creator" })
  @ManyToOne(() => User, (user) => user.comments)
  creator: User;

  @Field(() => String, { description: "Comment's content" })
  @Column()
  content: string;

  @Field(() => Date)
  @CreateDateColumn({
    type: 'datetime',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdAt: Date;

  @Field(() => Date)
  @UpdateDateColumn({
    type: 'datetime',
    default: () => 'CURRENT_TIMESTAMP',
  })
  updatedAt: Date;
}
