import { DeepPartial, DeleteResult, FindManyOptions, FindOneOptions, ObjectLiteral, QueryDeepPartialEntity, UpdateResult } from "typeorm";

export interface IBaseRepository<T>{
    findOne(options: FindOneOptions<T>): Promise<T | null>
    find(options?: FindManyOptions<T>): Promise<T[]>
    insert(payload: DeepPartial<T>): Promise<T>
    update(id: number, payload: QueryDeepPartialEntity<T>): Promise<UpdateResult>
    softDelete(id: number): Promise<UpdateResult>
    restore(id: number): Promise<UpdateResult>
    deleteById(id: number): Promise<DeleteResult>
}