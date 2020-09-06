const express = require("express");
const router = express.Router();

// Controller
const controllerClients = require("../../controllers/clientController");

// @routes POST api/clients
// @description Create a client
router.post("/", controllerClients.create);

// @routes GET api/clients
// @description Get All clients
router.get("/", controllerClients.findAll);

// @routes GET api/clients/:id
// @description Get a client
router.get("/:id", controllerClients.findOne);

// @routes UPDATE api/clients/:id
// @description Update a client
router.patch("/:id", controllerClients.update);

// @routes DELETE api/clients/:id
// @description Delete a client
router.delete("/:id", controllerClients.remove);

// @routes DELETE ALL api/clients
// @description Delete all clients
router.delete("/", controllerClients.removeAll);

module.exports = router;
