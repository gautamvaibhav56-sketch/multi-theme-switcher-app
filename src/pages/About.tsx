import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemesContext";

/**
 * About component displays information about the theme chooser app.
 * It uses the current theme from ThemeContext to apply dynamic styling.
 */
const About: React.FC = () => {
  // Access the current theme value from the ThemeContext
  const { theme } = useContext(ThemeContext);

  /**
   * Returns CSS class names based on the active theme ID.
   * Themes are identified by numeric IDs: 0, 1, and 2.
   */
  const getThemeClasses = (): string => {
    switch (theme) {
      case 0:
        // Minimalist light theme
        return "min-h-screen font-sans text-center";
      case 1:
        // Dark theme
        return "min-h-screen bg-gray-800 text-white font-serif";
      case 2:
        // Colorful gradient theme
        return "min-h-screen bg-gradient-to-r from-blue-500 via-red-500 via-yellow-300 to-green-500 text-white font-['Pacifico']";
      default:
        // Fallback to default styling
        return "min-h-screen font-sans text-center";
    }
  };

  return (
    // Apply dynamic theme classes and center the content
    <div className={`${getThemeClasses()} flex items-center justify-center`}>
      <div className="sm:text-3xl text-center sm:m-32 m-4">
        <p>
          This is the Multi Theme Chooser App. Currently we are serving 3
          themes.
        </p>
        <p>Stay tuned as more themes will be added soon.</p>
      </div>
    </div>
  );
};

export default About;
