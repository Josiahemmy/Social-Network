/* eslint-disable jsx-a11y/anchor-is-valid */

import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-900 py-6 px-4 flex justify-between items-center">
      <p className="text-gray-400 text-sm">
        Copyright &copy; {new Date().getFullYear()} My App
      </p>
      <nav>
        <ul className="flex">
          <li className="mr-4">
            <a href="#" className="text-gray-400 hover:text-gray-200">
              About
            </a>
          </li>
          <li className="mr-4">
            <a href="#" className="text-gray-400 hover:text-gray-200">
              Contact
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-400 hover:text-gray-200">
              Privacy Policy
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  );
}

export default Footer;
