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


    res.send({ user: {} });
  }

  update(req, res) {
    const id = Number(req.params.id);
    const body = req.body;


    res.send({ id, users });
  }

  remove(req, res) {
    const id = Number(req.params.id);


    res.send({ message: "Usuário removido" });
  }
}

module.exports = UserController;
