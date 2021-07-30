const database = require("../config/database");

let users = [];

const UserModel = require("../model/user.model");

class UserController {

  constructor() {
    this.UserModel = new UserModel();
  }

  async store(req, res) {

    try {
      const result = await this.UserModel.createUser(req.body);

      res.send(result);
    } catch (error) {
      
      res.status(404).send(error);
    }
  }

  async getAll(req, res) {

    try {
      const users = await this.UserModel.getAllUsers();

      res.send(users);
    } catch (error) {
      res.status(404).send(error);
    }
  }

  getOne(req, res) {
    const id = Number(req.params.id);

    const user = users.find((user) => {
      if (user.id === id) {
        return user;
      }
    });

    res.send({ user });
  }

  update(req, res) {
    const id = Number(req.params.id);
    const body = req.body;

    users = users.map((user) => {
      if (user.id === id) {
        const { firstname, lastname, email } = body;

        return { ...user, firstname, lastname, email };
      }

      return user;
    });

    res.send({ id, users });
  }

  remove(req, res) {
    const id = Number(req.params.id);

    users = users.filter((user) => {
      return user.id !== id;
    });

    res.send({ message: "Usuário removido" });
  }
}

module.exports = UserController;
