import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import ThemeProvider from "./contexts/themesContext.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ThemeProvider>
    <App />
  </ThemeProvider>
);
