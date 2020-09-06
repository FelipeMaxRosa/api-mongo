const User = require("../models/Users");

module.exports = {
  async findAll(req, res) {
    try {
      const users = await User.find();
      if (!users) throw Error("No users");
      res.status(200).send(users);
    } catch (err) {
      res.status(400).send({ message: err.message });
    }
  },
  async findOne(req, res) {
    try {
      const user = await User.findById(req.params.id);
      if (!user) throw Error("User not found!");
      res.status(200).send(user);
    } catch (err) {
      res.status(400).send({ message: err.message });
    }
  },
  async create(req, res) {
    const newUser = new User(req.body);

    try {
      const user = await newUser.save();

      if (!user) throw Error("Something went wrong while saveing the client");

      res.status(200).send(user);
    } catch (err) {
      res.status(400).send({ message: err.message });
    }
  },
  async update(req, res) {
    try {
      const user = await User.findByIdAndUpdate(req.params.id, req.body);
      if (!user) throw Error("Something went wrong while updating the client!");

      res.status(200).send({ success: true });
    } catch (err) {
      res.status(400).send({ message: err.message });
    }
  },
  async remove(req, res) {
    try {
      const user = await User.findByIdAndDelete(req.params.id);
      if (!user) throw Error("No client found!");
      res.status(200).send({ success: true });
    } catch (err) {
      res.status(400).send({ message: err.message });
    }
  },
  async removeAll(req, res) {
    try {
      const countUsersDeleted = await User.deleteMany();
      res.send({
        message: `${countUsersDeleted.deletedCount} users have been successfully deleted!`,
      });
    } catch (error) {
      res.status(500).send({ message: "Error deleting all users!" });
    }
  },
};
