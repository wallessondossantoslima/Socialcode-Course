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

  async getOne(req, res) {
    const id = Number(req.params.id);

    const user = await this.UserModel.getOne(id);

    if(!user){
      return res.status(404).send({message: "nao encontrado"});
    }

    res.send({ user });
  }

  async update(req, res) {
    const id = Number(req.params.id);
    const body = req.body;

    const response = await this.UserModel.updateUser(id, body);

    res.send({ response });
  }

  async remove(req, res) {
    const id = Number(req.params.id);

    const response = await this.UserModel.removeUser(id);

    if(response[0].affectedRuns === 0){
      return res.status(404).send({message: "nao encontrado"});
    }

    res.send({ response });
  }
}

module.exports = UserController;
