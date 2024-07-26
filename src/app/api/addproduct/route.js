// /pages/api/products.js
import { NextResponse } from "next/server";
import Product from "../../models/Product";
import connectDB from "../../middleware/mongoose";

export async function POST(req) {
  try {

    //Establishing DB Connection
    await connectDB();

    const body = await req.json(); // Parse the request body this is how we use this in nextjs

    for (let i = 0; i < body.length; i++) {
      const newProduct = new Product({
        title: body[i].title,
        productId: body[i].productId,
        desc: body[i].desc,
        img: body[i].img,
        category: body[i].category,
        size: body[i].size,
        color: body[i].color,
        price: body[i].price,
        avaliableQty: body[i].avaliableQty ?? 1 ,  //in case of avaliableQty is not there we use default value
      });
      await newProduct.save();
    }

    return NextResponse.json({ success: "success" });
  } catch (error) {
    console.error("Error data:", error);
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
