import { PartialType } from "@nestjs/swagger";
import { CreateUserExampleDto } from "./create-user-example.dto";

export class UpdateUserExampleDto extends PartialType(CreateUserExampleDto){}