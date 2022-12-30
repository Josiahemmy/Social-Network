import { Link } from "react-router-dom";
import React from "react";

function LandingPage() {
  return (
    <div className="bg-gray-100 h-screen flex items-center justify-center">
      <div className="w-full max-w-sm">
        <h1 className="text-3xl font-bold mb-4">
          Welcome to My Social Network
        </h1>
        <p className="text-gray-700 mb-4">
          Connect with friends and other developers from around the world.
        </p>
        <Link to="/signup" className="btn btn-primary block mb-4">
          Sign Up
        </Link>
        <Link to="/login" className="btn btn-secondary block mb-4">
          Log In
        </Link>
      </div>
    </div>
  );
}

export default LandingPage;
