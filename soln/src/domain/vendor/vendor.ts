import { Entity } from "../tatical-patterns/entity";
import { AggregateRoot } from "../tatical-patterns/aggregateRoot";
import { Tenant } from "../tenant/tenant";
import { BusinessUnit } from "../businessUnit/businessUnit";
import { SingleClient } from "../singleclient/singleClient";
import { tagged } from "inversify";

export class Vendor extends Entity implements AggregateRoot {


    private constructor(vendorNumber: string,
                    vendorName: string, 
                    singleClient: SingleClient,
                    nationallyManaged: string,
                    tenant: Tenant) {
            super();           
            this.vendorNumber = vendorNumber;
            this.vendorName = vendorName;
            this.singleClient = singleClient;
            this.nationallyManaged = nationallyManaged;
            this.tenant = tenant;
        }

    private vendorNumber : string; 

    private vendorName : string;

    private singleClient: SingleClient;

    private tenant: Tenant;

    private nationallyManaged: string;


    public static createVendor(vendorNumber: string,
                            vendorName: string, 
                            singleClient: SingleClient,
                            nationallyManaged: string,
                            tenant: Tenant): Vendor {
        
        const vendor = new Vendor(vendorNumber,vendorName,singleClient,nationallyManaged,tenant);
        return vendor;
    }

    public createBusinessUnit(businessUnit: string,taggedValues: []): BusinessUnit {
        return BusinessUnit.create(businessUnit,taggedValues); 
    }

}