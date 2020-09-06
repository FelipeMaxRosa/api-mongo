const express = require("express");
const router = express.Router();

// Client Model
const Clients = require("../../models/Clients");

// @routes GET api/clients
// @description Get All clients
router.get("/", async (req, res) => {
  try {
    const clients = await Clients.find();
    if (!clients) throw Error("No clients");
    res.status(200).send(clients);
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
});

// @routes POST api/clients
// @description Create a client
router.post("/", async (req, res) => {
  const newClient = new Clients(req.body);

  try {
    const client = await newClient.save();

    if (!client) throw Error("Something went wrong while saveing the client");

    res.status(200).send(client);
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
});

// @routes DELETE api/clients/:id
// @description Delete a client
router.delete("/:id", async (req, res) => {
  try {
    const client = await Clients.findByIdAndDelete(req.params.id);
    if (!client) throw Error("No client found!");
    res.status(200).send({ success: true });
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
});

// @routes UPDATE api/clients/:id
// @description Update a client
router.patch("/:id", async (req, res) => {
  try {
    const client = await Clients.findByIdAndUpdate(req.params.id, req.body);
    if (!client) throw Error("Something went wrong while updating the client!");

    res.status(200).send({ success: true });
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
});

// @routes GET api/clients/:id
// @description Get a client
router.get("/:id", async (req, res) => {
  try {
    const client = await Clients.findById(req.params.id);
    if (!client) throw Error("Client not found!");
    res.status(200).send(client);
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
});

module.exports = router;
