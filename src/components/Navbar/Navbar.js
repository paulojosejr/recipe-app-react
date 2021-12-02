import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-links">
        <Link to="/" className="nav-link" replace>
          Home
        </Link>
        <Link to="/recipeList" className="nav-link" replace>
          Recipes
        </Link>
        <Link to="/about" className="nav-link" replace>
          About
        </Link>
      </div>
    </nav>
  );
}
