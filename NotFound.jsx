import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-[60vh] text-center">
      <h1 className="text-4xl font-bold text-pink-600 mb-4">404 - Page Not Found</h1>
      <p className="text-gray-600 mb-6">Oops! The page you're looking for doesn't exist.</p>
      <Link to="/" className="text-white bg-pink-500 px-4 py-2 rounded hover:bg-pink-600">
        Go Back Home
      </Link>
    </div>
  );
}
