import { Module, NestModule, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './users/user.module';
import { AuthenticateMiddleware } from './middleware/authenticate.middleware';

@Module({
  imports: [
    UserModule,
    MongooseModule.forRoot(
      `mongodb+srv://product-pandit:Yg0CoCpJhVD5EWNj@development.cqmh3tc.mongodb.net/?retryWrites=true&w=majority`,
      {
        autoIndex: true,
      },
    ),
  ]
})
export class AppModule implements NestModule {
  
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthenticateMiddleware)
      .forRoutes({ path: 'some-path', method: RequestMethod.ALL });
  }

}
