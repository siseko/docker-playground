MongoClient = require("mongodb").MongoClient;

const url = "mongodb://mongodb:27017";

exports.insertPeople = () =>
  new Promise((resolve, reject) => {
    MongoClient.connect(url, function(err, client) {
      if (err) return reject(err);

      const db = client.db("test");
      db.collection("people").insert({ name: "Poes" }, (err, result) => {
        if (err) return reject(err);
        resolve(result);
      });

      client.close();
    });
  });

exports.getAllPeople = () =>
  new Promise((resolve, reject) => {
    MongoClient.connect(url, function(err, client) {
      if (err) return reject(err);

      const db = client.db("test");
      db.collection("people")
        .find({})
        .toArray((err, result) => {
          if (err) return reject(err);
          resolve(result);
        });

      client.close();
    });
  });
