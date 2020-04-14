"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const typeorm_1 = require("typeorm");
let Vendor = class Vendor {
};
tslib_1.__decorate([
    typeorm_1.PrimaryGeneratedColumn("uuid"),
    tslib_1.__metadata("design:type", String)
], Vendor.prototype, "vendorId", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ type: "varchar", length: 50, nullable: true }),
    tslib_1.__metadata("design:type", String)
], Vendor.prototype, "vendorName", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ type: "varchar", length: 1, nullable: true }),
    tslib_1.__metadata("design:type", String)
], Vendor.prototype, "nationallyManaged", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ type: "datetime" }),
    tslib_1.__metadata("design:type", Date)
], Vendor.prototype, "auditCreatedDateTime", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ type: "varchar", length: 50 }),
    tslib_1.__metadata("design:type", String)
], Vendor.prototype, "auditCreatedBy", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ type: "datetime", nullable: true }),
    tslib_1.__metadata("design:type", Date)
], Vendor.prototype, "auditModifiedDateTime", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ type: "varchar", length: 50, nullable: true }),
    tslib_1.__metadata("design:type", String)
], Vendor.prototype, "auditModifiedBy", void 0);
Vendor = tslib_1.__decorate([
    typeorm_1.Entity("Vendor")
], Vendor);
exports.Vendor = Vendor;
//# sourceMappingURL=vendor.js.map