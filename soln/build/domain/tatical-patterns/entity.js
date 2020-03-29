"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uid = require("uuid");
class Entity {
    constructor() {
        this.uuid = uid.v4();
    }
    getUUID() {
        return this.uuid;
    }
}
exports.Entity = Entity;
