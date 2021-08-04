const express = require("express");

const LanguageController = require("../controllers/film.controller");

const Router = express.Router();

const controller = new FilmController();

Router.get("/Film/:id", (req, res) => controller.getOne(req, res));
Router.get("/Film", (req, res) => controller.getAll(req, res));
Router.post("/Film", (req, res) => controller.store(req, res));
Router.put("/Film/:id", (req, res) => controller.update(req, res));
Router.delete("/Film/:id", (req, res) => controller.remove(req, res));

module.exports = Router;
