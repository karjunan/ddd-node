
export interface IVendorProperties {

    vendorNumber: string;
    vendorName: string;
    nationallyManaged: string;
    singleClient?: SingleClient;
    businessUnit?: BusinessUnit;
    tenant?: Tenant;

}

export interface SingleClient {
    singleClientID: string;
    clientNumber: string;
}

export interface BusinessUnit {
    businessUnitName: string;
}

export interface Tenant {
    tenantID: string;
}
