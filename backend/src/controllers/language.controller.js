const LanguageModel = require("../model/language.model");
const Controller = require("./controller");
const joi = require("joi");

const Schema = joi.object({
  name: joi.string().min(4).max(20).required(),
});
class LanguageController extends Controller {
  constructor() {
    super(LanguageModel);
  }


store(req, res) {
  const validation = Schema.validate(req.body, { abortEarly: false });

  const errors = this.getValidationErrot(validation);

  if (errors.length) {
    return this.sendErrorResponse(res, errors);
  }
    super.store(req, res);
  }
}

module.exports = LanguageController;
