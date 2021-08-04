const express = require("express");

const ActorController = require("../controllers/actor.controller");

const Router = express.Router();

const controller = new ActorController();

Router.get("/Actor/:id", (req, res) => controller.getOne(req, res));
Router.get("/Actor", (req, res) => controller.getAll(req, res));
Router.post("/Actor", (req, res) => controller.store(req, res));
Router.put("/Actor/:id", (req, res) => controller.update(req, res));
Router.delete("/Actor/:id", (req, res) => controller.remove(req, res));

module.exports = Router;
