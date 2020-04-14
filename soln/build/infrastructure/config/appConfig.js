"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
exports.dbOptions = {
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
};
//# sourceMappingURL=appConfig.js.map