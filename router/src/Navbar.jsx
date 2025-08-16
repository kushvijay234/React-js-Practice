import React from "react";
import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <header className="bg-white shadow-md py-4 px-8 flex items-center justify-between">
      <nav className="flex gap-6">
        <Link to="/" className="text-blue-600 hover:text-blue-800 font-semibold">Home</Link>
        <Link to="/about" className="text-blue-600 hover:text-blue-800 font-semibold">About Us</Link>
        <Link to="/contact" className="text-blue-600 hover:text-blue-800 font-semibold">Contact Us</Link>
      </nav>
    </header>
  )
}

export default Navbar
