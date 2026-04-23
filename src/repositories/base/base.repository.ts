import { DeepPartial, DeleteResult, FindManyOptions, FindOneOptions, ObjectLiteral, QueryDeepPartialEntity, Repository, UpdateResult } from "typeorm";
import { IBaseRepository } from "./base.interface.repository";

export abstract class BaseRepository<T extends ObjectLiteral> implements IBaseRepository<T>{
    private entity: Repository<T>;

    protected constructor(entity: Repository<T>){
        this.entity = entity
    }

    async find(options?: FindManyOptions<T>): Promise<T[]> {
        return await this.entity.find(options);
    }

    async findOne(options: FindOneOptions<T>): Promise<T | null>{
        return await this.entity.findOne(options);
    }

    async insert(payload: DeepPartial<T>): Promise<T> {
        const object = await this.entity.create(payload);
        await this.entity.insert(object);
        return object;
    }

    async restore(id: number): Promise<UpdateResult> {
        return await this.entity.restore(id);
    }

    async update(id: number, payload: QueryDeepPartialEntity<T>): Promise<UpdateResult>{
        return await this.entity.update(id, payload);
    }

    async softDelete(id: number): Promise<UpdateResult> {
        return await this.entity.softDelete(id);
    }

    async deleteById(id: number): Promise<DeleteResult> {
        return await this.entity.delete(id);
    }
}