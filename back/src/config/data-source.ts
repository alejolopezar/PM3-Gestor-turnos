import { DataSource } from "typeorm"
import { DB_HOST, DB_PORT, DB_USERNAME, DB_PASSWORD, DB_DATABASE } from "./envs"
import { User } from "../entities/User";
import { Appointment } from "../entities/Appointment";
import { Credential } from "../entities/Credentials";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: DB_HOST,
    port: Number(DB_PORT),
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: DB_DATABASE,
    synchronize: true,
    logging: false,
    entities: [User, Appointment, Credential],
    subscribers: [],
    migrations: [],
    dropSchema: false
})


export const initializeDataSource = async () => {

    try {

        const connection = await AppDataSource.initialize();
        console.log(`Connected to database ${connection.options.database}`);
        console.log()

    } catch (error) {
        console.log(`Database connection error: ${error}`)
    }
}