import React, { useEffect, useState } from 'react';
import "../styles/cart.css";
import { FaShoppingCart } from 'react-icons/fa';
import { MdLocalShipping } from 'react-icons/md';










function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const [shippingLocation, setShippingLocation] = useState('');

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    const selectedLocation = localStorage.getItem('selectedLocation') || 'Not set';

    setCartItems(storedCart);
    setShippingLocation(selectedLocation);
  }, []);

  const handleDelete = (indexToDelete) => {
    const updatedCart = cartItems.filter((_, index) => index !== indexToDelete);
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  return (
    <div className='cartmain'>
     


<div className='carthead'>
  <h2>
    <FaShoppingCart style={{ marginRight: '8px' }} />
    Your cart
  </h2>
  <h4>
    <MdLocalShipping style={{ marginRight: '6px' }} />
    Shipping to <span style={{ color: "#00ccff", marginLeft: '4px' }}>{shippingLocation}</span>
  </h4>
</div>







      <div className='carts'>
        {cartItems.length === 0 ? (
          <p style={{ color: 'white', fontSize: '1.2rem' }}>Your cart is empty.</p>
        ) : (
          cartItems.map((item, index) => (
            <div key={index} className="cart-item">
              <img src={item.img} alt={item.name} className="cart-img" />
              <div className="cart-details">
                <h3>{item.name}</h3>
                <p>Quantity: {item.quantity}</p>
                <p>Price: ${(item.price * item.quantity).toFixed(2)}</p>
              </div>
              <button className="delete-btn" onClick={() => handleDelete(index)}>
                🗑️
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Cart;
