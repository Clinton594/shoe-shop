import "dotenv/config";
import express from "express";
import cors from "cors";
import connect from "./config/mongodb.js";
import DataImport from "./Routes/DataImport.js";
import ProductRouter from "./Routes/ProductRoutes.js";
import UserRoutes from "./Routes/UserRoutes.js";
import ErrorHandler from "./Middleware/ErrorHandler.js";

connect();
const app = express();
// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json({ extended: false }));

// Resolve Cross origin issues
app.use(cors({ origin: ["http://localhost:3000"] }));

//API Routes
app.use("/api/import", DataImport);
app.use("/api/products", ProductRouter);
app.use("/api/user", UserRoutes);

// Error handler
app.use(ErrorHandler);

const port = process.env.PORT || 1000;
app.listen(port, () => {
  console.clear();
  console.log(`server now started at port ${port}`);
});
