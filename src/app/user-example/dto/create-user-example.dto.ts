import { IsDate, IsNotEmpty, IsString, Matches } from "class-validator";

export class CreateUserExampleDto{
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsNotEmpty()
    @Matches(/^\d{3}\.?\d{3}\.?\d{3}-?\d{2}$/, {
        message: 'O CPF deve estar no formato 000.000.000-00 ou apenas números',
    })
    cpf: string;
}