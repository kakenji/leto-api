import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppDataSource } from './database/config/data-source';
import { ConfigModule } from '@nestjs/config';
import { UserExampleController } from './app/user-example/user-example.controller';
import { UserExampleService } from './app/user-example/user-example.service';
import { UserExampleModule } from './app/user-example/user-example.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(AppDataSource),
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env'
    }),
    UserExampleModule
  ],
  controllers: [AppController, UserExampleController],
  providers: [AppService, UserExampleService],
})
export class AppModule {}
