import { BaseRepository } from "./base/base.repository";
import { IUserExampleRepository } from "./interfaces/user-example.interface.repository";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { FindUserExampleDto } from "src/app/user-example/dto/find-user-example.dto";
import { UserExample } from "src/database/entities/user-example.entity";

export class UserExampleRepository 
    extends BaseRepository<UserExample>
    implements IUserExampleRepository{
        constructor(
            @InjectRepository(UserExample, process.env.DB_NAME)
            private readonly ormRepository: Repository<UserExample>
        ) {
            super(ormRepository)
        }

        async customFind(payload: FindUserExampleDto): Promise<UserExample[]>{
            const { cpf, name } = payload;
            const queryBuilder = this.ormRepository.createQueryBuilder('userExample');

            if(cpf){
                queryBuilder.andWhere('userExample.cpf = :cpf', {
                    cpf: `${cpf}`
                })
            }

            if(name){
                queryBuilder.andWhere('userExample.name = :name', {
                    name: `%${name}%`
                })
            }

            return await queryBuilder.getMany();
        }
    }