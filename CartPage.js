import React from "react";
import { useNavigate } from "react-router-dom";
import CartItemCard from "../components/CartItemCard";

export default function CartPage({ cart, increaseQty, decreaseQty, deleteItem }) {
  const navigate = useNavigate();

  const totalAmount = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="page">
      <h1 className="page-title">🛒 Shopping Cart</h1>

      {cart.length === 0 ? (
        <p className="empty-cart">
          Your cart is empty 🌱 <br />
          Add some plants!
        </p>
      ) : (
        <>
          <div className="cart-list">
            {cart.map((item) => (
              <CartItemCard
                key={item.id}
                item={item}
                increaseQty={increaseQty}
                decreaseQty={decreaseQty}
                deleteItem={deleteItem}
              />
            ))}
          </div>

          <h2 className="total">Grand Total: ₹{totalAmount}</h2>

          <div className="cart-buttons">
            <button className="btn" onClick={() => navigate("/products")}>
              Continue Shopping
            </button>

            <button
              className="btn checkout"
              onClick={() => alert("Checkout Successful 🌿✨")}
            >
              Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
}
