import React, { useState } from 'react';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const removeFromCart = (productId) => {
    setCartItems(cartItems.filter(item => item.id !== productId));
  };

  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="fixed right-0 top-0 w-80 h-full bg-white shadow-lg p-6">
      <h2 className="text-2xl font-bold mb-4">Carrito</h2>
      {cartItems.map(item => (
        <div key={item.id} className="flex justify-between mb-2">
          <span>{item.name}</span>
          <span>${item.price}</span>
          <button onClick={() => removeFromCart(item.id)}>Eliminar</button>
        </div>
      ))}
      <div className="mt-4 font-bold">Total: ${total.toFixed(2)}</div>
      <button className="w-full bg-black text-white py-2 mt-4">
        Checkout
      </button>
    </div>
  );
};

export default Cart;