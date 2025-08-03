import React, { useContext } from "react";
import { ProductContext } from "../contexts/ProductContext";
/**
 * Tailwind color border classes to rotate through cards.
 */
const colors = [
  "border-blue-500",
  "border-red-500",
  "border-yellow-400",
  "border-green-500",
];

/**
 * ThemeThree component renders a colorful layout with dynamic product cards.
 * products are fetched from product context
 */
const ThemeThree: React.FC = () => {
  const {products} = useContext(ProductContext)
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 via-yellow-300 to-green-500 text-black py-24 px-8 font-['Pacifico']">
      {/* Heading */}
      <h1 className="sm:text-4xl font-bold mb-4 text-center text-white drop-shadow">
        Welcome To Awesome & Colorful Theme
      </h1>

      {/* Subheading */}
      <p className="text-center text-white mb-8 font-medium sm:text-2xl">
        A fun, colorful card layout. Products are fetched and shown here.
      </p>

      {/* Loading State */}
      {products.length === 0 ? (
        <div className="text-center sm:text-5xl animate-bounce text-white text-3xl">
          Hold On! Products are Loading 😃
        </div>
      ) : (
        // Product Grid
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((item, index) => (
            <div
              key={item.id}
              className={`p-4 bg-white bg-opacity-80 backdrop-blur-md cursor-pointer rounded-xl border-4 shadow-lg shadow-gray-700 hover:scale-105 transition duration-300  ${
                colors[index % colors.length]
              }`}
            >
              {/* Product Image */}
              <img
                src={item.image}
                alt={item.title}
                className="size-32 mx-auto object-contain mb-4"
              />

              {/* Product Title */}
              <h2
                className="text-md font-semibold mb-2 text-center text-gray-800"
                title={item.title}
              >
                {item.title.length > 25
                  ? `${item.title.slice(0, 25)}...`
                  : item.title}
              </h2>

              {/* Product Price */}
              <p className="text-center text-gray-900 font-normal">
                ${item.price.toFixed(2)}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ThemeThree;
