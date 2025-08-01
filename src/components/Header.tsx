import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ThemeContext } from "../contexts/themesContext";
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
      className={`fixed w-full px-4 py-2 z-50 ${getHeaderClasses()}`}
      role="banner"
    >
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
        {/* Navigation Section */}
        <ul className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6">
          <li className="lg:mx-16 text-lg font-bold cursor-pointer hover:opacity-80  hover:scale-125 transition duration-500">
            <NavLink to="/">Logo</NavLink>
          </li>
          <li className="cursor-pointer hover:opacity-80 hover:scale-125 transition duration-500">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="cursor-pointer hover:opacity-80 hover:scale-125 transition duration-500">
            <NavLink to="/about">About</NavLink>
          </li>
          <li className="cursor-pointer hover:opacity-80 hover:scale-125 transition duration-500">
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>

        {/* Dropdown aligned below nav on mobile */}
        <div className="mt-3 sm:mt-0 sm:ml-auto">
          <Dropdown />
        </div>
      </div>
    </div>
  );
};

export default Header;
