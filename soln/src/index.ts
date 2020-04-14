
import "reflect-metadata";
import * as express from 'express';
import {container} from "./inversify.config";
import { InversifyExpressServer, interfaces, TYPE } from "inversify-express-utils";
import bodyParser = require('body-parser');
import './application/rest/vendorController';
import {createConnection, ConnectionOptionsReader} from "typeorm";
import * as appConfig from './infrastructure/config/appConfig'
import { connect } from 'http2';
import {Vendor as VendorEntity} from './infrastructure/persistance/model/vendor';
createConnection( 
  

  ).then(async connection => {
    console.log("Connected to DB");
    // const userRepository = connection.getRepository(VendorEntity);
    // userRepository.find();
  }).catch(error => console.log("TypeORM connection error: ", error)); 
  
let server =  new InversifyExpressServer(container);

server.setConfig((app) => {
    // add body parser
    app.use(bodyParser.urlencoded({
      extended: true
    }));
    app.use(bodyParser.json());
  });

  let app = server.build();
  app.listen(5001, () => {
      console.log("Server started on port 5001 ");
  });