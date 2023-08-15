const express = require("express");

const app = express();

app.get("/api/products", (req, res) => {
  res.send("Get all products");
});

app.post("/api/products", (req, res) => {
  res.send("Create a product");
});

app.put("/api/products/:id", (req, res) => {
  res.send("Create a product for " + req.params.id);
});

app.delete("/api/products/:id", (req, res) => {
  res.send("Delete product " + req.params.id);
});

app.listen(8000, () => {
  console.log("Server running on port 8000...");
});
