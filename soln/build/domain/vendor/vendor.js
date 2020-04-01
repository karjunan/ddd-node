"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const entity_1 = require("../tatical-patterns/entity");
class Vendor extends entity_1.Entity {
    constructor(vendorNumber, vendorName, nationallyManaged, singleClient, tenant) {
        super();
        this.vendorNumber = vendorNumber;
        this.vendorName = vendorName;
        this.nationallyManaged = nationallyManaged;
    }
    static createVendor(vendorNumber, vendorName, nationallyManaged, singleClient, tenant) {
        const vendor = new Vendor(vendorNumber, vendorName, nationallyManaged, singleClient, tenant);
        return vendor;
    }
}
exports.Vendor = Vendor;
