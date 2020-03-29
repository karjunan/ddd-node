"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const valueObject_1 = require("../tatical-patterns/valueObject");
class Tenant extends valueObject_1.ValueObject {
    constructor(tenantId) {
        super();
        this.tenantId = tenantId;
    }
    static create(tenantId) {
        const tenant = new Tenant(tenantId);
        return tenant;
    }
}
exports.Tenant = Tenant;
