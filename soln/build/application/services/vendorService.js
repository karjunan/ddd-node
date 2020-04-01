"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const vendor_1 = require("../../domain/vendor/vendor");
const inversify_1 = require("inversify");
let VendorService = class VendorService {
    constructor() {
    }
    createVendor(request) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const vendor = yield vendor_1.Vendor.createVendor(request.vendorNumber, request.vendorName, request.nationallyManaged);
            console.log("Finally created a Vendor");
            const res = { "isSuccess": JSON.stringify(vendor) };
            return res;
        });
    }
};
VendorService = tslib_1.__decorate([
    inversify_1.injectable(),
    tslib_1.__metadata("design:paramtypes", [])
], VendorService);
exports.VendorService = VendorService;
