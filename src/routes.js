const express = require("express");
const addressController = require("./controllers/address-controller");
const reportController = require("./controllers/report-controller");
const techController = require("./controllers/tech-controller");
const userController = require("./controllers/user-controller");

const routes = express.Router();

routes.get("/users", userController.index);
routes.post("/users", userController.store);

routes.post("/users/:user_id/addresses", addressController.store);
routes.get("/users/:user_id/addresses", addressController.index);

routes.post("/users/:user_id/techs", techController.store);
routes.get("/users/:user_id/techs", techController.index);
routes.delete("/users/:user_id/techs", techController.delete);

routes.get("/report", reportController.show);

module.exports = { routes };
