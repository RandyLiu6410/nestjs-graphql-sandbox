import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { CommentModule } from './comment/comment.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'schema.gql',
      playground: true,
      // subscriptions: {
      //   'graphql-ws': true,
      // },
      installSubscriptionHandlers: true,
    }),
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db.sql',
      autoLoadEntities: true,
      synchronize: true,
    }),
    UserModule,
    CommentModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
