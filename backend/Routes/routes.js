const routes = require("express").Router();
const api = require("../data/api");
routes.get("/home", (req, res) => {
  res.send(api);
});

module.exports = routes;
