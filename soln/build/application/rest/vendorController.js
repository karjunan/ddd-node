"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const inversify_express_utils_1 = require("inversify-express-utils");
const express = require("express");
const types_1 = require("../../infrastructure/types");
const inversify_1 = require("inversify");
const vendorService_1 = require("../services/vendorService");
let VendorController = class VendorController {
    constructor(vendorService) {
        this.vendorService = vendorService;
    }
    index(req, res) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            console.log("Request => ", req);
            try {
                const posts = yield this.vendorService.createVendor(req);
                res.status(200).json(posts);
            }
            catch (error) {
                res.status(400).json(error);
            }
        });
    }
    get(res) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            console.log("Entered Finally !! ");
            res.send("Finally Output");
        });
    }
};
tslib_1.__decorate([
    inversify_express_utils_1.httpPost("/"),
    tslib_1.__param(0, inversify_express_utils_1.requestBody()),
    tslib_1.__param(1, inversify_express_utils_1.response()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], VendorController.prototype, "index", null);
tslib_1.__decorate([
    inversify_express_utils_1.httpGet("/"),
    tslib_1.__param(0, inversify_express_utils_1.response()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], VendorController.prototype, "get", null);
VendorController = tslib_1.__decorate([
    inversify_express_utils_1.controller(""),
    tslib_1.__param(0, inversify_1.inject(types_1.TYPES.VENDOR_SERVICE)),
    tslib_1.__metadata("design:paramtypes", [vendorService_1.VendorService])
], VendorController);
exports.VendorController = VendorController;
//# sourceMappingURL=vendorController.js.map