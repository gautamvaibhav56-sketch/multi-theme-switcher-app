import React, { useState } from "react";

/**
 * ThemeOne component renders the Minimalist theme layout.
 * It includes a welcome message, description, and a toggleable section for showing benefits.
 */
const ThemeOne: React.FC = () => {
  // Local state to toggle the visibility of the benefits section
  const [showBenefits, setShowBenefits] = useState<boolean>(false);

  return (
    <div className="pt-14 font-sans text-center">
      {/* Main heading */}
      <h1 className="text-3xl m-10 font-bold">Welcome To Minimalist Theme</h1>

      {/* Description paragraph */}
      <p className="mx-4">
        This is the Minimalist theme with a simple and classy layout. Perfect
        for professionals who want their pages to be subtle.
      </p>

      {/* Toggle button */}
      <button
        className="border bg-gray-900 p-2 px-6 text-white m-10 rounded-md hover:bg-gray-600 transition duration-500 cursor-pointer"
        onClick={() => setShowBenefits(!showBenefits)}
        aria-expanded={showBenefits}
      >
        Click me to Show/Hide benefits
      </button>

      {/* Conditionally rendered benefits section */}
      {showBenefits && (
        <div className="pt-8 transition-all duration-500 ease-in-out animate-fade">
          <h2 className="text-2xl font-normal mb-4">
            Benefits of using Minimalist Theme
          </h2>
          <ul className="list-decimal list-inside">
            <li>Fast performance</li>
            <li>Lightweight design</li>
            <li>Simple and focused</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default ThemeOne;
