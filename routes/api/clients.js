const express = require("express");
const router = express.Router();

// Controller
const controllerClient = require("../../controllers/clientController");

// @routes POST api/clients
// @description Create a client
router.post("/", controllerClient.create);

// @routes GET api/clients
// @description Get All clients
router.get("/", controllerClient.findAll);

// @routes GET api/clients/:id
// @description Get a client
router.get("/:id", controllerClient.findOne);

// @routes UPDATE api/clients/:id
// @description Update a client
router.patch("/:id", controllerClient.update);

// @routes DELETE api/clients/:id
// @description Delete a client
router.delete("/:id", controllerClient.remove);

// @routes DELETE ALL api/clients
// @description Delete all clients
router.delete("/", controllerClient.removeAll);

module.exports = router;
