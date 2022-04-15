import mongoose from "mongoose";

const ProductModel = mongoose.model(
  "Product",
  mongoose.Schema(
    {
      title: { type: String, require: true },
      image: { type: String, require: true },
      description: { type: String, require: true },
      rating: { type: Number, require: true, default: 0 },
      numReviews: { type: Number, require: true, default: 0 },
      reviews: [
        {
          name: { type: String, require: true },
          rate: { type: Number, require: true, default: 0 },
          comment: { type: String },
          user: { type: mongoose.Schema.Types.ObjectId, require: true, ref: "User" },
        },
      ],
      price: { type: Number, require: true, default: 0 },
      countInStock: { type: Number, require: true, default: 0 },
    },
    {
      timestamps: true,
    }
  )
);

export default ProductModel;
