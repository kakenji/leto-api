import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({ name: 'user-example', database: process.env.DB_DATABASE })
export class UserExample{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    birthday: Date

    @CreateDateColumn({ name: 'created_at'})
    createdAt: Date
    
    @UpdateDateColumn({ name: 'updated_at'})
    updatedAt: Date
    
    @DeleteDateColumn({ name: 'deleted_at'})
    deletedAt: Date
}