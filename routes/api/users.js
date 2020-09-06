const express = require("express");
const router = express.Router();

// Controller
const controllerUser = require("../../controllers/userController");

// @routes POST api/users
// @description Create an user
router.post("/", controllerUser.create);

// @routes GET api/users
// @description Get All users
router.get("/", controllerUser.findAll);

// @routes GET api/users/:id
// @description Get an user
router.get("/:id", controllerUser.findOne);

// @routes UPDATE api/users/:id
// @description Update an user
router.patch("/:id", controllerUser.update);

// @routes DELETE api/users/:id
// @description Delete an user
router.delete("/:id", controllerUser.remove);

// @routes DELETE ALL api/users
// @description Delete all users
router.delete("/", controllerUser.removeAll);

module.exports = router;
