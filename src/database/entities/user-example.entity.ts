import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({ name: 'user_example', database: process.env.DB_DATABASE })
export class UserExample{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    cpf: string
    
    @Column()
    name: string;

    @CreateDateColumn({ name: 'created_at'})
    createdAt: Date
    
    @UpdateDateColumn({ name: 'updated_at'})
    updatedAt: Date
    
    @DeleteDateColumn({ name: 'deleted_at'})
    deletedAt: Date
}