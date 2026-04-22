import { Type } from "class-transformer";
import { IsDate, IsNumber, IsOptional, IsString } from "class-validator";

export class FindUserExampleDto{
    @IsNumber()
    @IsOptional()
    @Type(() => Number)
    id: number

    @IsString()
    @IsOptional()
    name: string

    @IsDate()
    @IsOptional()
    birthday: Date
}  