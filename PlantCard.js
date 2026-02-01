import React from "react";

export default function PlantCard({ plant, addToCart }) {
  return (
    <div className="card">
      <img src={plant.image} alt={plant.name} className="card-img" />

      <div className="card-body">
        <h3>{plant.name}</h3>
        <p className="desc">{plant.description}</p>
        <p className="price">₹{plant.price}</p>

        <button className="btn" onClick={() => addToCart(plant)}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}
