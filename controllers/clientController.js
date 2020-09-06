const Clients = require("../models/Clients");

module.exports = {
  async findAll(req, res) {
    try {
      const clients = await Clients.find();
      if (!clients) throw Error("No clients");
      res.status(200).send(clients);
    } catch (err) {
      res.status(400).send({ message: err.message });
    }
  },
  async findOne(req, res) {
    try {
      const client = await Clients.findById(req.params.id);
      if (!client) throw Error("Client not found!");
      res.status(200).send(client);
    } catch (err) {
      res.status(400).send({ message: err.message });
    }
  },
  async create(req, res) {
    const newClient = new Clients(req.body);

    try {
      const client = await newClient.save();

      if (!client) throw Error("Something went wrong while saveing the client");

      res.status(200).send(client);
    } catch (err) {
      res.status(400).send({ message: err.message });
    }
  },
  async update(req, res) {
    try {
      const client = await Clients.findByIdAndUpdate(req.params.id, req.body);
      if (!client)
        throw Error("Something went wrong while updating the client!");

      res.status(200).send({ success: true });
    } catch (err) {
      res.status(400).send({ message: err.message });
    }
  },
  async remove(req, res) {
    try {
      const client = await Clients.findByIdAndDelete(req.params.id);
      if (!client) throw Error("No client found!");
      res.status(200).send({ success: true });
    } catch (err) {
      res.status(400).send({ message: err.message });
    }
  },
  async removeAll(req, res) {
    try {
      const countClientsDeleted = await Clients.deleteMany();
      res.send({
        message: `${countClientsDeleted.deletedCount} clients have been successfully deleted!`,
      });
    } catch (error) {
      res.status(500).send({ message: "Erro ao excluir todas as Transacoes" });
    }
  },
};
