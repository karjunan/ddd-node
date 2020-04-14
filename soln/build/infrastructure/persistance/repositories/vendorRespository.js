"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const inversify_1 = require("inversify");
const typeorm_1 = require("typeorm");
const vendor_1 = require("../model/vendor");
let VendorRespository = class VendorRespository {
    findVendor() {
        return typeorm_1.getManager().getRepository(vendor_1.Vendor).find();
    }
    insert() {
        console.log('Inserting a value to Vendor Table');
        try {
            let v = new vendor_1.Vendor();
            v.vendorName = 'krishna';
            v.nationallyManaged = 'y';
            v.auditCreatedDateTime = new Date();
            v.auditCreatedBy = 'kumaran';
            let emp = typeorm_1.getManager().save(v);
            console.log(emp);
        }
        catch (ex) {
            console.log("Excpetion is => ", ex);
        }
    }
};
VendorRespository = tslib_1.__decorate([
    inversify_1.injectable()
], VendorRespository);
exports.VendorRespository = VendorRespository;
//# sourceMappingURL=vendorRespository.js.map