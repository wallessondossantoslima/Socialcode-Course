const UserModel = require("../model/user.model");
const Controller = require("./controller");
const jwt = require("jsonwebtoken");

class UserController extends Controller {
  constructor() {
    super(UserModel);
  }
  async auth(req, res){
    const {email, password} = req.body;

    const user = await UserModel.findOne({ raw: true, where: {email}});

    if(!user){
      return this.sendErrorResponse(res, {messege: "not found"});
    }

    if(user.password !== password){
      return this.sendErrorResponse(res, {messege: "senha errada"});
    }

    delete user.password;

    const token = jwt.sign(user, proncess.env.JWT_SECRET);
    
    return res.send({user});
  }
}

module.exports = UserController;
