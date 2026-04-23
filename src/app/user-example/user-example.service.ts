import { BadRequestException, Inject, Injectable } from "@nestjs/common";
import { IUserExampleRepository } from "src/repositories/interfaces/user-example.interface.repository";
import { CreateUserExampleDto } from "./dto/create-user-example.dto";
import { FindUserExampleDto } from "./dto/find-user-example.dto";
import { UpdateUserExampleDto } from "./dto/update-user-example.dto";
import { UserExample } from "src/database/entities/user-example.entity";

@Injectable()
export class UserExampleService{
    constructor(
        @Inject('userExampleRepository')
        private readonly userExampleRepository: IUserExampleRepository
    ){}

    async createUserExample(payload: CreateUserExampleDto): Promise<UserExample>{
        console.log(payload.name);
        console.log(payload.cpf);
        const { cpf } = payload;

        const registeredUser = await this.userExampleRepository.findOne({
            where: { cpf }
        })

        if(registeredUser) throw new BadRequestException('CPF already registered')

        const entity = await this.userExampleRepository.insert(payload);

        return entity;
    }

    async updateUserExample(id: number, payload: UpdateUserExampleDto): Promise<UserExample>{
        const user = await this.userExampleRepository.findOne({
            where: { id }
        })

        if(!user) throw new BadRequestException('User not found')

        await this.userExampleRepository.update(id, payload);
        
        return await this.userExampleRepository.findOne({
            where: { id }
        })
    }

    async findUserExample(payload: FindUserExampleDto): Promise<UserExample[]>{
        return await this.userExampleRepository.customFind(payload);
    }

    async deleteUserExample(id: number): Promise<void>{
        const user = await this.userExampleRepository.findOne({
            where: { id }
        })

        if(!user) throw new BadRequestException('User not found')

        await this.userExampleRepository.softDelete(id);
    }
    
    async restoreUserExample(id: number): Promise<void>{
        const user = await this.userExampleRepository.findOne({
            where: { id },
            withDeleted: true
        })

        if(!user) throw new BadRequestException('User not found')

        await this.userExampleRepository.restore(id);
    }
}