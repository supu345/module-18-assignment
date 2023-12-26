const mongoose = require("mongoose");

const ProductDetailsSchema = new mongoose.Schema(
  {
    img1: { type: String, required: true },
    img2: { type: String, required: true },
    img3: { type: String, required: true },
    img4: { type: String, required: true },
    des: { type: String, required: true },
    color: { type: String, required: true },
    size: { type: String, required: true },
    productID: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
  },
  { timestamps: true, versionKey: false }
);

const ProductDetailsModel = mongoose.model(
  "productDetails",
  ProductDetailsSchema
);

module.exports = ProductDetailsModel;
