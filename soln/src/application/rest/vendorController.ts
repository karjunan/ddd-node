import { interfaces, controller, httpGet, httpPost, httpDelete, request, queryParam, response, requestParam, BaseHttpController, requestBody } from "inversify-express-utils";

import * as express from 'express';
import { TYPES } from '../../infrastructure/types';
import { inject } from 'inversify';
import { VendorService } from '../services/vendorService';
import {IVendorProperties} from '../services/IVendorProperties'

@controller("")
export class VendorController implements interfaces.Controller{


    private vendorService: VendorService;

    constructor(@inject(TYPES.VENDOR_SERVICE) vendorService: VendorService) {
    this.vendorService =vendorService;
    }

    @httpPost("/")
    public async index (@requestBody() req: IVendorProperties, 
                        @response() res: express.Response) {
      console.log("Request => ", req);                    
      try {
        const posts = await this.vendorService.createVendor(req)
        res.status(200).json(posts);
      } catch(error) {
        res.status(400).json(error);
      }
    }

    @httpGet("/")
    public async get ( @response() res: express.Response) {
      console.log("Entered Finally !! ");
      res.send("Finally Output");
    }

}