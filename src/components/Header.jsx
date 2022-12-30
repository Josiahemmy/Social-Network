import { Link } from "react-router-dom";
import React from "react";

function Header() {
  return (
    <header className="bg-gray-900 py-6 px-4 flex justify-between items-center">
      <Link to="/">
        <h1 className="text-2xl font-bold text-white">My App</h1>
      </Link>
      <nav>
        <ul className="flex">
          <li className="mr-4">
            <Link
              to="/feed"
              className="text-white font-medium hover:text-gray-400"
            >
              Feed
            </Link>
          </li>
          <li className="mr-4">
            <Link
              to="/messages"
              className="text-white font-medium hover:text-gray-400"
            >
              Messages
            </Link>
          </li>
          <li>
            <Link
              to="/profile"
              className="text-white font-medium hover:text-gray-400"
            >
              Profile
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
