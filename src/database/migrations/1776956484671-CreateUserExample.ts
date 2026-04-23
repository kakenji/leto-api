import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateUserExample1776956484671 implements MigrationInterface {
    name = 'CreateUserExample1776956484671'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "user_example" ("id" SERIAL NOT NULL, "cpf" character varying NOT NULL, "name" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, CONSTRAINT "PK_028876d9c4b4de2973112c3bffa" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "user_example"`);
    }

}
