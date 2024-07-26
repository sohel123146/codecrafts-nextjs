const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timeStamps: true }
);

mongoose.models = {}  //everytime it gets import its trying to make models again to ensure we use this mongoose.models = {} 
export default mongoose.model("User", UserSchema);
