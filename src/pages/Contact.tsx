import React, { useContext } from "react";
import { ThemeContext } from "../contexts/themesContext";

/**
 * Contact page component with theme-based styling.
 */
const Contact: React.FC = () => {
  const { theme } = useContext(ThemeContext);

  /**
   * Returns the classes based on the current theme.
   */
  const themeClasses = () => {
    switch (theme) {
      case 0:
        // Minimalist theme: white background, black text, sans-serif font
        return "min-h-screen font-sans text-center";
      case 1:
        // Dark theme: dark background, white text, serif font
        return "min-h-screen bg-gray-800 text-white font-serif";
      case 2:
        // Colourful theme: colorful gradient background with custom font
        return "min-h-screen bg-gradient-to-r from-blue-500 via-red-500 via-yellow-300 to-green-500 text-white font-['Pacifico']";
      default:
        return "min-h-screen font-sans text-center";
    }
  };

  return (
    <div className={`${themeClasses()} flex items-center justify-center`}>
      <div className="text-center p-10">
        <h1 className="text-3xl mb-4 underline decoration-3 underline-offset-6">
          Contact Us
        </h1>
        <p>Email: support@something.com</p>
        <p>Phone: +91-9000000000</p>
      </div>
    </div>
  );
};

export default Contact;
