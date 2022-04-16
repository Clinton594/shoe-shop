import express from "express";
import expressAsyncHandler from "express-async-handler";
import ProductModel from "../Models/ProductModel.js";

const ProductRouter = express.Router();

// Product list
ProductRouter.get(
  "/",
  expressAsyncHandler(async (req, res) => {
    const products = await ProductModel.find({});
    res.json(products);
  })
);

// single product
ProductRouter.get(
  "/:id",
  expressAsyncHandler(async (req, res) => {
    const product = await ProductModel.findById(req.params.id);
    if (product) {
      res.json(product);
    } else {
      res.status(404);
      throw new Error("Product not found");
    }
  })
);

export default ProductRouter;
