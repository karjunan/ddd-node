"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const inversify_1 = require("inversify");
const types_1 = require("../../types");
const typeorm_1 = require("typeorm");
let VendorSqlRepository = class VendorSqlRepository {
    constructor(repository) {
    }
};
VendorSqlRepository = tslib_1.__decorate([
    inversify_1.injectable(),
    tslib_1.__param(0, inversify_1.inject(types_1.TYPES.VendorReposiotry)),
    tslib_1.__metadata("design:paramtypes", [typeorm_1.Repository])
], VendorSqlRepository);
exports.VendorSqlRepository = VendorSqlRepository;
