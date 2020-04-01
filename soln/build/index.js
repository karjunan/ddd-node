"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const inversify_config_1 = require("./inversify.config");
const inversify_express_utils_1 = require("inversify-express-utils");
const bodyParser = require("body-parser");
require("./application/rest/vendorController");
let server = new inversify_express_utils_1.InversifyExpressServer(inversify_config_1.container);
server.setConfig((app) => {
    app.use(bodyParser.urlencoded({
        extended: true
    }));
    app.use(bodyParser.json());
});
let appConfigured = server.build();
appConfigured.listen(3000, () => {
    console.log("Application listening on port 3000");
});
