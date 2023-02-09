const express = require("express");
const path = require("path");
const app = express();
const port = 80;
const fs = require("fs");

// For serving static files
app.use("/static", express.static("static"));

// Set the template engine as hbs
app.set("view engine", "hbs");

// Set the views directory
app.set("../views", path.join(__dirname, "views"));

// Our hbs endpoint

app.get("/", (req, res) => {
  res.status(200).render("index.hbs");
});
app.get("/Offers", (req, res) => {
  res.status(200).render("offers.hbs");
});
app.get("/products", (req, res) => {
  res.status(200).render("product.hbs");
});
app.get("/order", (req, res) => {
  res.status(200).render("order.hbs");
});
app.get("/cart", (req, res) => {
  res.status(200).render("cart.hbs");
});

app.listen(port, () => {
  console.log(`The application started successfully on port ${port}`);
});
