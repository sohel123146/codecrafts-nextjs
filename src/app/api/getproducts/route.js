import { NextResponse } from "next/server";
import Product from "../../models/Product"; // Ensure the path is correct
import connectDB from "../../middleware/mongoose";

export async function GET() {
  try {
    // Establishing DB Connection
    await connectDB();

    // Fetching data using the created model
    let products = await Product.find({ category: 'tshirt' });
    let tshirts = {};   // Initialize tshirts as an empty object

    // Loop through each product and structure the tshirts object
    for (let item of products) {
      if (item.title in tshirts) {            
        if (!tshirts[item.title].color.includes(item.color) && item.avaliableQty > 0) {
          tshirts[item.title].color.push(item.color);  //if the color is in item already the pushing it into the color array
        }
        if (!tshirts[item.title].size.includes(item.size) && item.avaliableQty > 0) {
          tshirts[item.title].size.push(item.size);  //if the size is in item already the pushing it into the size array
        }
      } else {
        // Deep copy the item if "item.title" is not in the tshirts object and then initialize colors and sizes
        tshirts[item.title] = { ...item._doc }; // copying all items into the tshirts object Use _doc to get the plain object 
        if (item.avaliableQty > 0) {    //if "itms.avaliableQty" is > 0 the making arrays of sizes and colors
          tshirts[item.title].color = [item.color];
          tshirts[item.title].size = [item.size];
        }
      }
    }

    return NextResponse.json({ tshirts });
  } catch (error) {
    console.error("Error fetching data:", error);
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
