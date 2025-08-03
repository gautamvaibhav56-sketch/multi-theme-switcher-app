import { createContext, ReactNode, useEffect, useState } from "react";
/**
 * Interface for product item shape from fakestoreapi.com
 */
export interface Item {
  id: number;
  title: string;
  image: string;
  price: number;
}

interface ProductContextType {
  products: Item[];
}

export const ProductContext = createContext<ProductContextType>({
  products: [],
});

const ProductProvider = ({ children }: { children: ReactNode }) => {
  // Strongly type the data state as an array of Item
  const [products, setProducts] = useState<Item[]>([]);

  useEffect(() => {
    /**
     * Fetch product data from the fake store API and store the first 8 items.
     */
    const fetchProducts = async () => {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        const json: Item[] = await res.json();
        setProducts(json.slice(0, 12));
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    };

    fetchProducts();
  }, []);
  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
