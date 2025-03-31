import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="logo">Online Library</h1>
      <div className="nav-links">
        <Link className="nav-link" to="/">Home</Link>
        <Link className="nav-link" to="/browsebooks">Browse Books</Link>
        <Link className="nav-link" to="/add">Add Book</Link>
      </div>
    </nav>
  );
}

export default Navbar;