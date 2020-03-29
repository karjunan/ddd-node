
import "reflect-metadata";
import * as express from 'express';
import container from "./inversify.config";
import { InversifyExpressServer, interfaces, TYPE } from "inversify-express-utils";

// import './controllers/PostController';

const app = express();

let server =  new InversifyExpressServer(container, null, { rootPath: "/api" }, app);

let appConfigured = server.build();
let serve = appConfigured.listen(process.env.PORT || 3000, 
    () => `App running on ${serve.address().port}`);