// /pages/api/products.js
import { NextResponse } from "next/server";
import Product from "../../models/Product"; // Ensure the path is correct
import connectDB from "../../middleware/mongoose";

export async function GET() {
  try {
    // Establishing DB Connection
    await connectDB();

    // Fetching data using the created model
    const products = await Product.find();

    return NextResponse.json({ products });
  } catch (error) {
    console.error("Error fetching data:", error);
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
