"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const inversify_1 = require("inversify");
const vendorService_1 = require("./application/services/vendorService");
const types_1 = require("./infrastructure/types");
const vendorRespository_1 = require("./infrastructure/persistance/repositories/vendorRespository");
const container = new inversify_1.Container();
exports.container = container;
container.bind(types_1.TYPES.VENDOR_SERVICE).to(vendorService_1.VendorService);
container.bind(types_1.TYPES.VENDOR_RESPOSITORY).to(vendorRespository_1.VendorRespository);
const venService = container.get(types_1.TYPES.VENDOR_SERVICE);
const venRepository = container.get(types_1.TYPES.VENDOR_RESPOSITORY);
//# sourceMappingURL=inversify.config.js.map