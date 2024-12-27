import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // Import CSS for Navbar styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">MyWebsite</div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
      <button className="hamburger" onClick={toggleMenu}>☰</button>
    </nav>
  );

  function toggleMenu() {
    const navLinks = document.querySelector(".nav-links");
    navLinks.classList.toggle("active");
  }
};

export default Navbar;