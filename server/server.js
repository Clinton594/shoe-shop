import "dotenv/config";
import express from "express";
import cors from "cors";
import ProductRouter from "./Routes/ProductRouter.js";
import connect from "./config/mongodb.js";
import DataImport from "./Routes/DataImport.js";

connect();
const app = express();
app.use(cors({ origin: ["http://localhost:3000"] }));

// ------------------------------------------- API Routes
// import data into mongo db
app.use("/api/import", DataImport);

// Products
app.use("/api/products", ProductRouter);
// ------------------------------------------- FrontEnd Routes
// Home page
app.get("/", (req, res) => {
  app.use;
  res.send("API is up and running");
});

const port = process.env.PORT || 1000;
app.listen(port, console.log(`server now started at port ${port}`));
