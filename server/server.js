import "dotenv/config";
import express from "express";
import cors from "cors";
import ProductRouter from "./Routes/ProductRouter.js";
import connect from "./config/mongodb.js";
import DataImport from "./Routes/DataImport.js";
import { ErrorHandler, NotFound } from "./Middleware/ErrorHandler.js";

connect();
const app = express();
app.use(cors({ origin: ["http://localhost:3000"] }));

//API Routes
app.use("/api/import", DataImport);
app.use("/api/products", ProductRouter);

// Error handlers
app.use(NotFound);
app.use(ErrorHandler);

const port = process.env.PORT || 1000;
app.listen(port, () => {
  console.clear();
  console.log(`server now started at port ${port}`);
});
