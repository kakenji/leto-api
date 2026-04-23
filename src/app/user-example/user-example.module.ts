import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserExampleController } from "./user-example.controller";
import { UserExampleService } from "./user-example.service";
import { UserExampleRepository } from "src/repositories/user-example.repository";
import { UserExample } from "src/database/entities/user-example.entity";

@Module({

  imports: [
    TypeOrmModule.forFeature([UserExample],
        process.env.DB_NAME,
    ),
    ],
  controllers: [UserExampleController],
  providers: [
    {
        provide: 'userExampleService',
        useClass: UserExampleService
    },
    {
        provide: 'userExampleRepository',
        useClass: UserExampleRepository
    }
  ],
  exports: [
    'userExampleService',
    'userExampleRepository'
  ],
})
export class UserExampleModule {}
