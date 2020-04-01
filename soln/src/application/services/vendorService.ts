import { IVendorProperties } from "./IVendorProperties";
import { Vendor } from "../../domain/vendor/vendor";
import { SingleClient } from "../../domain/singleclient/singleClient";
import { Tenant } from "../../domain/tenant/tenant";
import { IVendorCreatedResponse } from "./IVendorCreatedResponse";
import { injectable, inject } from "inversify";
import { IVendorService } from './IVendorService';
import { VendorSqlRepository } from '../../infrastructure/persistance/repositories/vendorRespository';
import { TYPES } from '../../infrastructure/types';

@injectable()
export class VendorService implements IVendorService {

    public constructor(@inject(TYPES.VendorReposiotry) vendorSqlRepository: VendorSqlRepository ) {

    }

    public async createVendor(request: IVendorProperties) : Promise<IVendorCreatedResponse> {

        const vendor = await Vendor.createVendor(request.vendorNumber,
                            request.vendorName,
                            request.nationallyManaged);
                          
        console.log("Finally created a Vendor");

        const res = {"isSuccess": JSON.stringify(vendor)}
        return res;

    }

}