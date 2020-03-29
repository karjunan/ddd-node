import { IVendorProperties } from "./IVendorProperties";
import { Vendor } from "../../domain/vendor/vendor";
import { SingleClient } from "../../domain/singleclient/singleClient";
import { Tenant } from "../../domain/tenant/tenant";
import { IVendorCreatedResponse } from "./IVendorCreatedResponse";
import { injectable } from "inversify";

@injectable()
export class VendorService {

    public constructor() {

    }

    public async createVendor(request: IVendorProperties) : Promise<IVendorCreatedResponse> {

        const vendor = await Vendor.createVendor(request.vendorNumber,
                            request.vendorName,
                            SingleClient.create(request.singleClient.singleClientID,request.singleClient.clientNumber),
                            request.nationallyManaged,
                            Tenant.create(request.tenant.tenantID));

        console.log("Finally created a Vendor");

        const res = {"isSuccess": JSON.stringify(vendor)}
        return res;

    }

}