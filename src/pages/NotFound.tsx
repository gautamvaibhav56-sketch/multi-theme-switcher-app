import React from "react";
import { Link } from "react-router-dom";

/**
 * NotFound component - displays a 404 error page for unknown routes.
 */
const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center bg-gray-100 text-gray-800 font-sans px-4 pt-20">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-2">Page Not Found</h2>
      <p className="mb-6">
        Oops! The page you're looking for doesn't exist.
      </p>
      <Link
        to="/"
        className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-800 transition duration-300"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;
