import React from "react";
import { useNavigate } from "react-router-dom";

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="landing">
      <h1>Welcome to Paradise Nursery 🌱</h1>
      <p>
        Discover aromatic and medicinal plants that bring health, freshness and
        beauty to your home.
      </p>

      <button className="btn big" onClick={() => navigate("/products")}>
        Shop Now
      </button>
    </div>
  );
}
