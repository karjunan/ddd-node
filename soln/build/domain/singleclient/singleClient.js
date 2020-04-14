"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const valueObject_1 = require("../tatical-patterns/valueObject");
class SingleClient extends valueObject_1.ValueObject {
    constructor(singleClientId, clientNumber) {
        super();
        this.singleClientId = singleClientId;
        this.clientNumber = clientNumber;
    }
    static create(singleClientId, clientNumber) {
        const singleClient = new SingleClient(singleClientId, clientNumber);
        return singleClient;
    }
}
exports.SingleClient = SingleClient;
//# sourceMappingURL=singleClient.js.map