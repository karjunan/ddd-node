"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const vendor_1 = require("../../domain/vendor/vendor");
const inversify_1 = require("inversify");
const vendorRespository_1 = require("../../infrastructure/persistance/repositories/vendorRespository");
const types_1 = require("../../infrastructure/types");
const vendor_2 = require("../../infrastructure/persistance/model/vendor");
let VendorService = class VendorService {
    constructor(vendorSqlRepository) {
        this.vendorSqlRepository = vendorSqlRepository;
    }
    createVendor(request) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const vendor = yield vendor_1.Vendor.createVendor(request.vendorNumber, request.vendorName, request.nationallyManaged);
            console.log("Finally created a Vendor");
            let v = new vendor_2.Vendor();
            this.vendorSqlRepository.insert();
            const res = { "isSuccess": JSON.stringify(vendor) };
            return res;
        });
    }
};
VendorService = tslib_1.__decorate([
    inversify_1.injectable(),
    tslib_1.__param(0, inversify_1.inject(types_1.TYPES.VENDOR_RESPOSITORY)),
    tslib_1.__metadata("design:paramtypes", [vendorRespository_1.VendorRespository])
], VendorService);
exports.VendorService = VendorService;
//# sourceMappingURL=vendorService.js.map