import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { UsersModule } from './users/users.module';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    UsersModule,
    MongooseModule.forRoot('mongodb://docker:mongopw@localhost:55001'),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
