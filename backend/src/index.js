require("dotenv").config();
const morgan = require("morgan");
const express = require("express");

const UserRouter = require("./routes/user.router");
const LanguageRouter = require("./routes/language.router");
const FilmRouter = require("./routes/film.router");
const CategoryRouter = require("./routes/category.router");
const ActorRouter = require("./routes/actor.router");
const HTTP_PORT = process.env.HTTP_PORT || 3333;

const app = express();
app.use(express.json());
app.use(morgan("dev"));

app.use("/api", UserRouter);
app.use("/api", LanguageRouter);
app.use("/api", FilmRouter);
app.use("/api", CategoryRouter);
app.use("/api", ActorRouter);

app.get("/", (req, res) => {
  res.send({ message: "Welcome to SocialCode" });
});
app.listen(HTTP_PORT, () => {
  console.log(`Aplicacao rodando ${HTTP_PORT}`);
});
