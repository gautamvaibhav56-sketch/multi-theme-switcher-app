import React from "react";

/**
 * ThemeTwo component represents the Dark Theme layout.
 * It includes a sidebar and a main content area with classic serif styling.
 */
const ThemeTwo: React.FC = () => {
  return (
    <div className="pt-14 flex flex-col md:flex-row min-h-screen bg-gray-900 text-white font-serif">
      {/* Sidebar section */}
      <aside className="w-full md:w-1/4 bg-gray-800 p-6">
        <h2 className="text-xl font-bold mb-4">Sidebar Navigation</h2>
        <ul className="space-y-3">
          <li className="hover:underline cursor-pointer">Dashboard</li>
          <li className="hover:underline cursor-pointer">Settings</li>
          <li className="hover:underline cursor-pointer">Profile</li>
        </ul>
      </aside>

      {/* Main content area */}
      <main className="w-full md:w-3/4 p-8 space-y-6">
        <h1 className="text-4xl font-bold">Welcome To Dark Theme</h1>
        <p className="text-lg">
          Dark layout with a structured sidebar and classic serif typography.
        </p>

        <button
          className="bg-blue-500 cursor-pointer px-6 py-2 rounded hover:bg-blue-700 animate-pulse transition"
          aria-label="Explore more about the dark theme"
        >
          Explore More
        </button>
      </main>
    </div>
  );
};

export default ThemeTwo;
