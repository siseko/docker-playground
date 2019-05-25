const express = require("express");
const db = require("./db");

const app = express();

app.get("/", (req, res) => {
  db.getAllPeople()
    .then(result => res.send(result))
    .catch(err => res.send(err));
});

app.get("/insert", (req, res) => {
  db.insertPeople()
    .then(result => res.send(result))
    .catch(err => res.send(err));
});

app.listen(8080, () => {
  console.log("Listening on port 8080");
});
