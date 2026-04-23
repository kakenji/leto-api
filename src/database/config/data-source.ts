import * as dotenv from 'dotenv'
import { DataSource, DataSourceOptions } from "typeorm"
import { UserExample } from '../entities/user-example.entity';
dotenv.config();

export const AppDataSource: DataSourceOptions = {
    name: process.env.DB_NAME,
    type: 'postgres',
    host: process.env.DB_HOST ?? 'localhost',
    port: parseInt(process.env.DB_PORT ?? '5432'),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    synchronize: false,
    logging: true,
    entities: [__dirname + '/../../database/entities/*{ts,js}'],
    migrations: [__dirname + '/../../database/migrations/*{ts,js}'],
    ssl: true
}

export default new DataSource(AppDataSource)