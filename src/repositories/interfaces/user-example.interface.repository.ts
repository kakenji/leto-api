import { UserExample } from "src/database/entities/user-example.entity";
import { IBaseRepository } from "../base/base.interface.repository";
import { FindUserExampleDto } from "src/app/user-example/dto/find-user-example.dto";

export interface IUserExampleRepository extends IBaseRepository<UserExample>{
    customFind(payload: FindUserExampleDto): Promise<UserExample[]>
}