import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppDataSource } from './database/config/data-source';
import { ConfigModule } from '@nestjs/config';
import { UserExampleController } from './app/user-example/user-example.controller';

@Module({
  imports: [
    TypeOrmModule.forRoot(AppDataSource),
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env'
    })
  ],
  controllers: [AppController, UserExampleController],
  providers: [AppService],
})
export class AppModule {}
