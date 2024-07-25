import { Inter } from "next/font/google";
import "./globals.css";
import React from "react";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import CartState from "./context/cart/CartState";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "codecrafts.com - wear the code",
  description: "codecrafts.com - wear the code",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CartState>
          <NavBar />
          {children}
          <Footer />
        </CartState>
      </body>
    </html>
  );
}
