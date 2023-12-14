import { ObjectType, Field, Int, Directive } from '@nestjs/graphql';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@ObjectType()
@Entity()
@Directive('@key(fields: "id")')
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
