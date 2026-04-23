import { BadRequestException, Body, Controller, Get, Inject, Param, Patch, Post, Put, Query } from "@nestjs/common";
import { UserExampleService } from "./user-example.service";
import { FindUserExampleDto } from "./dto/find-user-example.dto";
import { CreateUserExampleDto } from "./dto/create-user-example.dto";
import { UpdateUserExampleDto } from "./dto/update-user-example.dto";
import { UserExample } from "src/database/entities/user-example.entity";

@Controller('user-example')
export class UserExampleController{
    constructor(
        @Inject('userExampleService')
        private readonly userExampleService: UserExampleService
    ){}

    @Get('/find')
    async findUserExample(@Query() payload: FindUserExampleDto): Promise<UserExample[]>{
        try{
            return await this.userExampleService.findUserExample(payload);
        } catch(error){
            console.log(error)
            throw new BadRequestException();
        }
    }

    @Post('/create')
    async createUserExample(@Body() payload: CreateUserExampleDto): Promise<UserExample>{
        try{
            return await this.userExampleService.createUserExample(payload);
        } catch(error){
            console.log(error)
            throw new BadRequestException();
        }
    }

    @Patch('/restore/:id')
    async restoreUserExample(@Param('id') id: number): Promise<{ message: string }>{
        try{
            await this.userExampleService.restoreUserExample(id);
            return {
                message: 'User has been restored successfully'
            }
        } catch(error){
            console.log(error)
            throw new BadRequestException();
        }
    }
    
    @Patch('/delete/:id')
    async deleteUserExample(@Param('id') id: number): Promise<{ message: string }>{
        try{
            await this.userExampleService.deleteUserExample(id);
            return{
                message: 'User has been deleted successfully'
            }
        } catch(error){
            console.log(error)
            throw new BadRequestException();
        }
    }

    @Put('/update/:id')
    async updateUserExample(@Param('id') id: number, @Body() payload: UpdateUserExampleDto): Promise<UserExample>{
        try{
            return await this.userExampleService.updateUserExample(id, payload);
        } catch(error){
            console.log(error)
            throw new BadRequestException();
        }
    }
}