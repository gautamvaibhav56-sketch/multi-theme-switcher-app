import React, { useContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import { ThemeContext } from "./contexts/ThemesContext";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

/**
 * Main application component.
 * Wraps all routes with a dynamic theme based on the current selection in ThemeContext.
 */
const App: React.FC = () => {
  const { theme, themeConfig } = useContext(ThemeContext);

  // Dynamically get the component for the current theme
  const ThemeComponent = themeConfig[theme]?.component;

  return (
    <BrowserRouter>
      {/* Persistent header across routes */}
      <Header />

      {/* Page content with transition and animation on theme change */}
      <div
        key={theme} // Key forces re-render on theme change
        className="transition-all duration-500 ease-in-out animate-fade"
      >
        <Routes>
          {/* Homepage: Renders the selected themed landing page */}
          <Route
            path="/"
            element={ThemeComponent ? <ThemeComponent /> : null}
          />

          {/* Other static pages */}
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          {/* Page Not Found */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
