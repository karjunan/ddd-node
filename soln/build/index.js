"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
require("reflect-metadata");
const inversify_config_1 = require("./inversify.config");
const inversify_express_utils_1 = require("inversify-express-utils");
const bodyParser = require("body-parser");
require("./application/rest/vendorController");
const typeorm_1 = require("typeorm");
typeorm_1.createConnection().then((connection) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    console.log("Connected to DB");
})).catch(error => console.log("TypeORM connection error: ", error));
let server = new inversify_express_utils_1.InversifyExpressServer(inversify_config_1.container);
server.setConfig((app) => {
    app.use(bodyParser.urlencoded({
        extended: true
    }));
    app.use(bodyParser.json());
});
let app = server.build();
app.listen(5001, () => {
    console.log("Server started on port 5001 ");
});
//# sourceMappingURL=index.js.map