const jsonServer = require("json-server");
const express = require("express");
const cors = require("cors");
const fs = require("fs");

const app = express();

app.use(cors());

const clients = JSON.parse(fs.readFileSync("./db/clients.json"));
const products = JSON.parse(fs.readFileSync("./db/products.json"));
const sales = JSON.parse(fs.readFileSync("./db/sales.json"));

const dbData = {
  clients,
  products,
  sales,
};

const router = jsonServer.router(dbData);

app.use(jsonServer.defaults());

app.use("/api", router);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`JSON Server corriendo en puerto ${PORT}`);
});
