import React from "react";
import Image from "next/image";
import Link from "next/link";

const getProducts = async () => {
  const response = await fetch("http://localhost:3000/api/getproducts");
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  const data = await response.json();
  console.log(data); // Log the data to confirm it's in the expected structure
  return data.products; // Return the products array my getProduct is object array
};

const Page = async () => {
  const Products = await getProducts();

  if (!Array.isArray(Products)) {
    return <p>Error: Products data is not available</p>; // Handle error case
  }

  return (
    <div className="container m-9">
      <section className="text-gray-400 body-font">
        <div className="container px-5 py-10 md:py-15 mx-auto">
          <div className="flex flex-wrap -m-4 justify-center">
            {Products.map((product) => (
              <div
                key={product._id}
                className="lg:w-1/5 md:w-1/2 md:m-5 my-4 m-4 w-full p-2 shadow-lg rounded-lg border border-1"
              >
                <Link
                  href={`/products/${product.productId}`}
                  className="block relative rounded overflow-hidden"
                >
                  <Image
                    alt={product.title}
                    className="bg-gray-200 rounded-2xl object-cover object-center w-7/12 md:w-11/12 h-full block m-auto"
                    src={product.img.replace(/"/g, '')} // Remove any extra " characters
                    width={600}
                    height={600}
                    priority
                  />
                </Link>
                <div className="mt-4 text-center">
                  <h3 className="text-gray-700 text-xs tracking-widest title-font mb-1">
                    {product.category}
                  </h3>
                  <h2 className="text-black title-font text-lg font-medium">
                    {product.title}
                  </h2>
                  <p className="mt-1">₹{product.price}</p>
                  <p className="mt-1">{product.size}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;
