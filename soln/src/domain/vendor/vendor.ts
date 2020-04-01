import { Entity } from "../tatical-patterns/entity";
import { AggregateRoot } from "../tatical-patterns/aggregateRoot";
import { Tenant } from "../tenant/tenant";
import { BusinessUnit } from "../businessUnit/businessUnit";
import { SingleClient } from "../singleclient/singleClient";
import { tagged } from "inversify";

export class Vendor extends Entity implements AggregateRoot {


    private constructor(vendorNumber: string,
                    vendorName: string, 
                    nationallyManaged: string,
                    singleClient?: SingleClient,
                    tenant?: Tenant) {
            super();           
            this.vendorNumber = vendorNumber;
            this.vendorName = vendorName;
            this.nationallyManaged = nationallyManaged;
        }

    private vendorNumber : string; 

    private vendorName : string;

    private nationallyManaged: string;


    public static createVendor(vendorNumber: string,
                            vendorName: string, 
                            nationallyManaged: string,
                            singleClient?: SingleClient,
                            tenant?: Tenant): Vendor {
        
        const vendor = new Vendor(vendorNumber,vendorName,nationallyManaged,singleClient,tenant);
        return vendor;
    }

}