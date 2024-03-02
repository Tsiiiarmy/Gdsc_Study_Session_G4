import React from 'react';

const ShoppingCart = ({ cart }) => {
  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {cart.map(item => (
          <li key={item.id}>
            <img src={item.image} alt={item.name} />
            <p>{item.name}</p>
            <p>Quantity: {item.quantity}</p>
            <p>${item.price * item.quantity}</p>
            <button>Remove</button>
          </li>
        ))}
      </ul>
      <p>Total: ${cart.reduce((total, item) => total + item.price * item.quantity, 0)}</p>
      <button>Complete Purchase</button>
    </div>
  );
};

export default ShoppingCart;
