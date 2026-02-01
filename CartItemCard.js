import React from "react";

export default function CartItemCard({
  item,
  increaseQty,
  decreaseQty,
  deleteItem
}) {
  return (
    <div className="cart-card">
      <img src={item.image} alt={item.name} className="cart-img" />

      <div className="cart-info">
        <h3>{item.name}</h3>
        <p>Unit Price: ₹{item.price}</p>
        <p>
          Total: <b>₹{item.price * item.quantity}</b>
        </p>

        <div className="qty-controls">
          <button className="qty-btn" onClick={() => decreaseQty(item.id)}>
            -
          </button>
          <span className="qty">{item.quantity}</span>
          <button className="qty-btn" onClick={() => increaseQty(item.id)}>
            +
          </button>
        </div>

        <button className="delete-btn" onClick={() => deleteItem(item.id)}>
          Delete
        </button>
      </div>
    </div>
  );
}
