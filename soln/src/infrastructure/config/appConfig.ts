import "reflect-metadata";
import {ConnectionOptions} from "typeorm";

export let dbOptions: ConnectionOptions = {
    type: "mssql",
    host: "localhost",
    port: 1433,
    username: "SA",
    password: "India_123!",
    database: "tempdb",
    entities: [
         "../../../build/infrastructure/persistance/model/vendor"
    ],
    synchronize: true,
    logging: true
}