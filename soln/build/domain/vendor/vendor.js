"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const entity_1 = require("../tatical-patterns/entity");
const businessUnit_1 = require("../businessUnit/businessUnit");
class Vendor extends entity_1.Entity {
    constructor(vendorNumber, vendorName, singleClient, nationallyManaged, tenant) {
        super();
        this.vendorNumber = vendorNumber;
        this.vendorName = vendorName;
        this.singleClient = singleClient;
        this.nationallyManaged = nationallyManaged;
        this.tenant = tenant;
    }
    static createVendor(vendorNumber, vendorName, singleClient, nationallyManaged, tenant) {
        const vendor = new Vendor(vendorNumber, vendorName, singleClient, nationallyManaged, tenant);
        return vendor;
    }
    createBusinessUnit(businessUnit, taggedValues) {
        return businessUnit_1.BusinessUnit.create(businessUnit, taggedValues);
    }
}
exports.Vendor = Vendor;
