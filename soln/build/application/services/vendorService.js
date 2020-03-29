"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const vendor_1 = require("../../domain/vendor/vendor");
const singleClient_1 = require("../../domain/singleclient/singleClient");
const tenant_1 = require("../../domain/tenant/tenant");
const inversify_1 = require("inversify");
let VendorService = class VendorService {
    constructor() {
    }
    createVendor(request) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const vendor = yield vendor_1.Vendor.createVendor(request.vendorNumber, request.vendorName, singleClient_1.SingleClient.create(request.singleClient.singleClientID, request.singleClient.clientNumber), request.nationallyManaged, tenant_1.Tenant.create(request.tenant.tenantID));
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
