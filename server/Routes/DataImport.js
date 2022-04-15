import express from "express";
import UserModel from "../Models/UserModel.js";
import Users from "../data/Users.js";
import ProductModel from "../Models/ProductModel.js";
import products from "../data/Products.js";

import asyncHandler from "express-async-handler"; // handles all experess async errors

const DataImport = express.Router();

DataImport.post(
  "/users",
  asyncHandler(async (req, res) => {
    await UserModel.remove({});
    const importedusers = await UserModel.insertMany(Users);
    res.send(importedusers);
  })
);

DataImport.post(
  "/products",
  asyncHandler(async (req, res) => {
    await ProductModel.remove({});
    const importedProducts = await ProductModel.insertMany(products);
    res.send(importedProducts);
  })
);

export default DataImport;
