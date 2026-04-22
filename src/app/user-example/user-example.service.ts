import { Inject, Injectable } from "@nestjs/common";

@Injectable()
export class UserExampleService{
    constructor(
        @Inject('userExampleRepository')
        private readonly userExampleRepository>
    )
}