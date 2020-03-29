
import "reflect-metadata";
import * as express from 'express';
import {container} from "./inversify.config";
import { InversifyExpressServer, interfaces, TYPE } from "inversify-express-utils";
import bodyParser = require('body-parser');
import './application/rest/vendorController';

let server =  new InversifyExpressServer(container);

server.setConfig((app) => {
    // add body parser
    app.use(bodyParser.urlencoded({
      extended: true
    }));
    app.use(bodyParser.json());
  });

let appConfigured = server.build();

appConfigured.listen(3000, () => {
    console.log("Application listening on port 3000")
});