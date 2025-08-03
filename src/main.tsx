import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import ThemeProvider from "./contexts/ThemeContext.tsx";
import "./index.css";
import ProductProvider from "./contexts/ProductContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ProductProvider>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </ProductProvider>
);
