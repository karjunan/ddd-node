
export interface IVendorProperties {

    vendorNumber: string;
    vendorName: string;
    singleClient: SingleClient;
    businessUnit: BusinessUnit;
    nationallyManaged: string;
    tenant: Tenant;

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