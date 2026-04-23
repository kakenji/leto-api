import { Type } from "class-transformer";
import { IsDate, IsNumber, IsOptional, IsString, Matches } from "class-validator";

export class FindUserExampleDto{
    @IsNumber()
    @IsOptional()
    @Type(() => Number)
    id: number

    @IsString()
    @IsOptional()
    name: string

    @IsString()
    @IsOptional()
    cpf: string;
}  