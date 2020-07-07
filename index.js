const express = require("express");
const bp = require("body-parser");
const mongoose = require("mongoose");

const PORT = 4000;
const DB = "mongodb://localhost:27017/something";

const app = express();

const userRoutes = require("./routes/users");
const productsRoutes = require("./routes/products");

app.use(bp.json());

app.use("/api/users", userRoutes);
app.use("/api/products", productsRoutes);

const startServer = async () => {
  await mongoose
    .connect(DB, {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("DATABASE CONNECTED SUCCESSFULLY"));
  app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
};

startServer();
