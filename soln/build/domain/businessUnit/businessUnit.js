"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const entity_1 = require("../tatical-patterns/entity");
class BusinessUnit extends entity_1.Entity {
    constructor(businessUnitName, taggedValueName) {
        super();
        this.businessUnitName = businessUnitName;
        this.taggedValueName = taggedValueName;
    }
    static create(businessUnitName, taggedValueName) {
        const businessUnit = new BusinessUnit(businessUnitName, taggedValueName);
        return businessUnit;
    }
}
exports.BusinessUnit = BusinessUnit;
//# sourceMappingURL=businessUnit.js.map