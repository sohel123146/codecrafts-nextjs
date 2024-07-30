"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const getProducts = async () => {
  const response = await fetch("http://localhost:3000/api/getproducts");
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  const data = await response.json();
  // Extract products from nested tshirts object
  // console.log(data)   returning tshirts object
  const products = Object.values(data.tshirts || {});
  // data.tshirts is expected to be an object where keys are product titles and values are product details.
  // Object.values(data.tshirts || {}) converts the tshirts object into an array of product objects.
  // The || {} ensures that if data.tshirts is undefined or null, an empty object is used instead, preventing errors.
  // console.log(products) returns array with objects init
  return products;
};

const Page = () => {
  const [products, setProducts] = useState([]); //Uses the useState hook to create a state variable products initialized as an empty array.

  //Uses the useEffect hook to perform side effects (fetching data) when the component mounts.
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productsData = await getProducts();
        setProducts(productsData);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
    //The empty dependency array [] ensures this effect runs only once after the initial render.
  }, []);

  // Checks if products is not an array or if it is an empty array.If true, returns an error message.
  if (!Array.isArray(products) || products.length === 0) {
    return <p>Error: Products data is not available</p>;
  }

  return (
    <div className="container m-9">
      <section className="text-gray-400 body-font">
        <div className="container px-5 py-10 md:py-15 mx-auto">
          <div className="flex flex-wrap -m-4 justify-center">
            {products.map((product) => (
              <div
                key={product._id}
                className="lg:w-1/5 md:w-1/3 md:m-5 my-4 m-4 w-full p-2 shadow-lg rounded-lg border border-1"
              >
                <Link
                  href={`/products/${product.productId}`}
                  className="block relative rounded overflow-hidden"
                >
                  <div className="relative w-full h-[250px]">
                    <Image
                      alt={product.title}
                      className="object-contain object-center w-full h-full"
                      src={product.img.replace(/"/g, "")} // Remove any extra " characters
                      width={600}
                      height={600}
                      priority
                    />
                  </div>
                </Link>
                <div className="mt-4 text-center">
                  <h3 className="text-gray-700 text-xs tracking-widest title-font mb-1">
                    {product.category}
                  </h3>
                  <h2 className="text-black title-font text-lg font-medium">
                    {product.title}
                  </h2>
                  <p className="mt-1">₹{product.price}</p>
                  <p className="mt-1">{product.size.join(", ")}</p>
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
