const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    products: [
      {
        productId: {
          type: String,
          required: true,
        },
        Quantity: {
          type: Number,
          default: 1,
        },
      },
    ],
    address: {
      type: String,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      default: "pending",
      required: true,
    },
  },
  { timeStamps: true }
);

mongoose.models = {}  //everytime it gets import its trying to make models again to ensure we use this mongoose.models = {} 
export default mongoose.model("Order", OrderSchema);
