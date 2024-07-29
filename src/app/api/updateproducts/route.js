// /pages/api/products.js
import { NextResponse } from "next/server";
import Product from "../../models/Product";
import connectDB from "../../middleware/mongoose";

export async function POST(req) {
  try {
    //Establishing DB Connection
    await connectDB();
    const body = await req.json();

    for (let i = 0; i < body.length; i++) {
      let updateproducts = await Product.findByIdAndUpdate(
        body[i]._id,
        body[i]
      ); //i want to updte multiple products we are updting with product id
      await updateproducts.save();
    }
    return NextResponse.json({ success: "success" });
  } catch (error) {
    console.error("Error data:", error);
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
