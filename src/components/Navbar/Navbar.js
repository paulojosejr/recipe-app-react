import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li>
          <Link to="/" className="nav-link" replace>
            Home
          </Link>
        </li>
        <li>
          <Link to="/recipeList" className="nav-link" replace>
            Recipes
          </Link>
        </li>
        <li>
          <Link to="/about" className="nav-link" replace>
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
}
