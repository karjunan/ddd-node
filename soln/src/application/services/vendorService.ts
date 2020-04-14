import { IVendorProperties } from "./IVendorProperties";
import { Vendor } from "../../domain/vendor/vendor";
import { SingleClient } from "../../domain/singleclient/singleClient";
import { Tenant } from "../../domain/tenant/tenant";
import { IVendorCreatedResponse } from "./IVendorCreatedResponse";
import { injectable, inject } from "inversify";
import { IVendorService } from './IVendorService';
import { VendorRespository } from '../../infrastructure/persistance/repositories/vendorRespository';
import { TYPES } from '../../infrastructure/types';
import {Vendor as VendorEnity} from '../../infrastructure/persistance/model/vendor'

@injectable()
export class VendorService implements IVendorService {

    // private vendorSqlRespoitory: VendorRespository;

    public constructor(@inject(TYPES.VENDOR_RESPOSITORY) public vendorSqlRepository: VendorRespository ) {
        // this.vendorSqlRespoitory = vendorSqlRepository;
    }

    public async createVendor(request: IVendorProperties) : Promise<IVendorCreatedResponse> {

        const vendor = await Vendor.createVendor(request.vendorNumber,
                            request.vendorName,
                            request.nationallyManaged);
                          
        console.log("Finally created a Vendor");
        let v: VendorEnity = new VendorEnity()
        this.vendorSqlRepository.insert();
        const res = {"isSuccess": JSON.stringify(vendor)}
        return res;

    }

}