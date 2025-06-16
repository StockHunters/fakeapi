const jsonServer = require("json-server");
const express = require("express");
const cors = require("cors");
const fs = require("fs");
const app = express();

app.use(cors());

const clients = JSON.parse(fs.readFileSync("./db/clients.json"));
const products = JSON.parse(fs.readFileSync("./db/products.json"));
const sales = JSON.parse(fs.readFileSync("./db/sales.json"));
const activities = JSON.parse(fs.readFileSync("./db/activities.json"));
const categories = JSON.parse(fs.readFileSync("./db/categories.json"));
const inventory_adjustments = JSON.parse(fs.readFileSync("./db/inventory_adjustments.json"));
const locations = JSON.parse(fs.readFileSync("./db/locations.json"));
const lots = JSON.parse(fs.readFileSync("./db/lots.json"));
const organizations = JSON.parse(fs.readFileSync("./db/organizations.json"));
const plans = JSON.parse(fs.readFileSync("./db/plans.json"));
const product_locations = JSON.parse(fs.readFileSync("./db/product_locations.json"));
const product_prices = JSON.parse(fs.readFileSync("./db/product_prices.json"));
const product_suppliers = JSON.parse(fs.readFileSync("./db/product_suppliers.json"));
const purchase_order_items = JSON.parse(fs.readFileSync("./db/purchase_order_items.json"));
const purchase_orders = JSON.parse(fs.readFileSync("./db/purchase_orders.json"));
const purchases = JSON.parse(fs.readFileSync("./db/purchases.json"));
const reports = JSON.parse(fs.readFileSync("./db/reports.json"));
const users = JSON.parse(fs.readFileSync("./db/users.json"));
const audit_logs = JSON.parse(fs.readFileSync("./db/audit_logs.json"));
const suppliers = JSON.parse(fs.readFileSync("./db/suppliers.json"));

const dbData = {
  clients,
  products,
  sales,
  activities,
  categories,
  inventory_adjustments,
  locations,
  lots,
  organizations,
  plans,
  product_locations,
  product_prices,
  product_suppliers,
  purchase_order_items,
  purchase_orders,
  purchases,
  reports,
  users,
  audit_logs,
  suppliers,
};

const router = jsonServer.router(dbData);

app.use(jsonServer.defaults());

app.use("/api", router);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`JSON Server corriendo en puerto ${PORT}`);
});
