import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ThemeContext } from "../contexts/ThemesContext";
import Dropdown from "./Dropdown";

/**
 * Header component that displays the navigation bar.
 * The styling of the header changes dynamically based on the current theme from ThemeContext.
 */
const Header: React.FC = () => {
  // Access the current theme value from the ThemeContext
  const { theme } = useContext(ThemeContext);

  /**
   * Returns CSS classes for the header based on the theme.
   */
  const getHeaderClasses = (): string => {
    switch (theme) {
      case 0:
        // Minimalist theme: white background, black text, sans-serif font
        return "bg-white text-black font-sans shadow";
      case 1:
        // Dark theme: dark background, white text, serif font
        return "bg-gray-900 text-white font-serif shadow";
      case 2:
        // Colourful theme: colorful gradient background with custom font
        return "bg-gradient-to-r from-blue-500 via-yellow-400 to-green-500 text-white font-['Pacifico'] shadow";
      default:
        // Fallback styling for unknown theme values
        return "bg-gray-700 text-white";
    }
  };

  return (
    // Fixed header with full width, padding, and theme-based styling
    <div
      className={`fixed w-full flex justify-between items-center px-2 z-50 ${getHeaderClasses()}`}
      role="banner"
    >
      <ul className="flex sm:space-x-4 sm:px-4">
        <li className="transition-transform duration-500 font-bold sm:p-4 px-2 py-4 cursor-pointer hover:scale-125 hover:opacity-60 sm:mx-6">
          <NavLink to="/">Logo</NavLink>
        </li>

        {/* navigation links */}
        <li className="transition-transform duration-500 sm:p-4 px-2 py-4 cursor-pointer hover:scale-125 hover:opacity-60">
          <NavLink to="/">Home</NavLink>
        </li>
        <li className="transition-transform duration-500 sm:p-4 px-2 py-4  cursor-pointer hover:scale-125 hover:opacity-60">
          <NavLink to="/about">About</NavLink>
        </li>
        <li className="transition-transform duration-500 sm:p-4 px-2 py-4 cursor-pointer hover:scale-125 hover:opacity-60">
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>

      {/* Theme selection dropdown */}
      <Dropdown />
    </div>
  );
};

export default Header;
