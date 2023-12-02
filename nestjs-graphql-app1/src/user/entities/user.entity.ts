import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Comment } from 'src/comment/entities/comment.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@ObjectType()
@Entity()
export class User {
  @Field(() => Int, { description: 'User ID' })
  @PrimaryGeneratedColumn()
  id: number;

  @Field(() => String, { description: "User's first name" })
  @Column()
  firstName: string;

  @Field(() => String, { description: "User's last name" })
  @Column()
  lastName: string;

  @Field(() => String, { description: "User's phone" })
  @Column()
  phone: string;

  @Field(() => String, { description: "User's email" })
  @Column()
  email: string;

  @Field(() => [Comment], {
    description: "User's comments",
    defaultValue: [],
  })
  @OneToMany(() => Comment, (comment) => comment.creator)
  comments: Array<Comment>;

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
