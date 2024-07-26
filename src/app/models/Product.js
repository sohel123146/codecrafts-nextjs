const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    productId: {
      type: String,
      required: true,
      unique: true,
    },
    desc: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    size: {
      type: String,
    },
    color: {
      type: String,
    },
    price: {
      type: Number,
      required: true,
    },
    avaliableQty: {
      type: Number,
      required: true,
      default: 1
    },
  },
  { timeStamps: true }
);

mongoose.models = {}  //everytime it gets import its trying to make models again to ensure we use this mongoose.models = {} 
export default mongoose.model("Product", ProductSchema);
