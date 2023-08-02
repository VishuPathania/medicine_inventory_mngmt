import React, { useContext } from 'react';
import { MedicineContext } from '../context/MedicineContext';

const Cart = () => {
  const { cart, decreaseQuantityAvailable } = useContext(MedicineContext);

  const handleAddToBill = (item) => {
    if (item.quantityAvailable > 0 && item.quantityToOrder > 0) {
      decreaseQuantityAvailable(item.name, item.quantityToOrder);
    }
  };
  return (
    <div className="cart">
      <h2>Cart</h2>
      <p>Number of items in cart: {cart.length}</p>
      <ul>
        {cart.map(item => (
          <li key={item.name}>
            <p>Medicine: {item.name}</p>
            <p>Description: {item.description}</p>
            <p>Quantity Ordered: {item.quantityToOrder}</p>
            <p>Remaining Quantity Available: {item.quantityAvailable}</p>
            {item.quantityAvailable > 0 ? (
              <button onClick={() => handleAddToBill(item)}>Add to Bill</button>
            ) : (
              <p>Out of stock</p>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
