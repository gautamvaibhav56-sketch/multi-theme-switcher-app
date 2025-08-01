import React, { useEffect, useState } from "react";

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
 * Interface for product item shape from fakestoreapi.com
 */
interface Item {
  id: number;
  title: string;
  image: string;
  price: number;
}

/**
 * ThemeThree component renders a colorful layout with dynamic product cards.
 * Data is fetched from a public fake store API.
 */
const ThemeThree: React.FC = () => {
  // Strongly type the data state as an array of Item
  const [data, setData] = useState<Item[]>([]);

  useEffect(() => {
    /**
     * Fetch product data from the fake store API and store the first 8 items.
     */
    const fetchProducts = async () => {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        const json: Item[] = await res.json();
        setData(json.slice(0, 8));
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 via-red-500 via-yellow-300 to-green-500 text-black py-24 px-8 font-['Pacifico']">
      {/* Heading */}
      <h1 className="text-4xl font-bold mb-4 text-center text-white drop-shadow">
        Welcome To Awesome & Colorful Theme
      </h1>

      {/* Subheading */}
      <p className="text-center text-white/90 mb-8 font-medium">
        A fun, colorful card layout. Products are fetched and shown here.
      </p>

      {/* Loading State */}
      {data.length === 0 ? (
        <div className="text-center text-5xl animate-bounce text-white sm:text-3xl">
          Hold On! Products are Loading 😃
        </div>
      ) : (
        // Product Grid
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {data.map((item: Item, index) => (
            <div
              key={item.id}
              className={`p-4 bg-white bg-opacity-80 backdrop-blur-md rounded-xl border-4 shadow-lg hover:scale-105 transition duration-300 ${
                colors[index % colors.length]
              }`}
            >
              {/* Product Image */}
              <img
                src={item.image}
                alt={item.title}
                className="h-32 mx-auto object-contain mb-4"
              />

              {/* Product Title */}
              <h2
                className="text-md font-semibold mb-2 text-center text-gray-800"
                title={item.title}
              >
                {item.title.length > 30
                  ? `${item.title.slice(0, 30)}...`
                  : item.title}
              </h2>

              {/* Product Price */}
              <p className="text-center text-gray-900 font-bold">
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
