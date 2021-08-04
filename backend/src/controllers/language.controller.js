const UserModel = require("../model/language.model");
const Controller = require("./controller");

class LanguageController extends Controller {
  constructor() {
    super(LanguageModel);
  }
}

module.exports = LanguageController;
