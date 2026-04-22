import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserExample } from "src/database/config/entities/user.example.entity";
import { UserExampleController } from "./user-example.controller";
import { UserExampleService } from "./user-example.service";
import { UserExampleRepository } from "src/repositories/user-example.repository";

@Module({

  imports: [
    TypeOrmModule.forFeature([UserExample],
        process.env.DB_DATABASE,
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
})
export class UserExampleModule {}
