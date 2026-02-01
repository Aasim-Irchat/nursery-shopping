import React from "react";
import PlantCard from "../components/PlantCard";
import plants from "../plantsData";

export default function ProductListingPage({ addToCart }) {
  const aromaticPlants = plants.filter((p) => p.category === "Aromatic");
  const medicinalPlants = plants.filter((p) => p.category === "Medicinal");

  return (
    <div className="page">
      <h1 className="page-title">🌿 Our Plants</h1>

      <h2 className="section-title">🌸 Aromatic Plants</h2>
      <div className="grid">
        {aromaticPlants.map((plant) => (
          <PlantCard key={plant.id} plant={plant} addToCart={addToCart} />
        ))}
      </div>

      <h2 className="section-title">💊 Medicinal Plants</h2>
      <div className="grid">
        {medicinalPlants.map((plant) => (
          <PlantCard key={plant.id} plant={plant} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
}
