import React from "react";
import Navbar from "../components/Navbar";
import { useTranslation } from "react-i18next";

const Shop = () => {
  const { t } = useTranslation();

  const products = [
    { id: 1, name: "Homemade Pickles", price: "₹150", image: "🥒" },
    { id: 2, name: "Handmade Jewelry", price: "₹500", image: "💍" },
    { id: 3, name: "Stitched Clothes", price: "₹800", image: "👗" },
    { id: 4, name: "Craft Items", price: "₹300", image: "🎨" },
  ];

  return (
    <div>
      <Navbar />
      <div className="p-4">
        <h1 className="text-2xl font-bold text-indigo mb-4">Marketplace</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow p-4 hover:shadow-lg transition">
              <div className="text-4xl mb-2">{product.image}</div>
              <h3 className="font-bold text-lg">{product.name}</h3>
              <p className="text-saffron font-bold">{product.price}</p>
              <div className="flex gap-2 mt-2">
                <button className="bg-indigo text-white px-3 py-1 rounded text-sm">
                  Add to Cart
                </button>
                <button className="bg-saffron text-white px-3 py-1 rounded text-sm">
                  Buy Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shop; 