import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar({ cartCount }) {
  const location = useLocation();

  return (
    <nav className="navbar">
      <h2 className="logo">🌿 Paradise Nursery</h2>

      <div className="nav-links">
        <Link className={location.pathname === "/" ? "active" : ""} to="/">
          Landing
        </Link>

        <Link
          className={location.pathname === "/products" ? "active" : ""}
          to="/products"
        >
          Products
        </Link>

        <Link className={location.pathname === "/cart" ? "active" : ""} to="/cart">
          Cart 🛒 <span className="cart-badge">{cartCount}</span>
        </Link>
      </div>
    </nav>
  );
}
