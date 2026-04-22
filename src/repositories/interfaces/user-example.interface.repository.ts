import { FindUserExampleDto } from "src/app/user-example/dto/find-user-example.dto";
import { UserExample } from "src/database/config/entities/user.example.entity";

export interface IUserExampleRepository{
    find(params: FindUserExampleDto): Promise<UserExample[]>;
}