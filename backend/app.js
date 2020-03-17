const express = require("express");
const app = express();

var bodyParser = require('body-parser')
let err = { error: "Algo salio mal!"}

var cors = require('cors');
const rutas = require("./rutas");
const assert = require('assert');
const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';
const dbName = 'abm_clientes';
const port = 3003;
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use(cors());


const client = new MongoClient(url, { useNewUrlParser: true });
app.use((req,res, next) => {
    var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    req.ip = ip;
    next();
});
client.connect(function(err) {
  assert.equal(null, err);

  const db = client.db(dbName);

  app.use((req,res,next) => {
      req.db = db;
      next();
  });

  app.use(rutas);

  app.listen(port, () => {
    console.log("Servidor iniciado en puerto", port);
  });
});