import React, { useState } from 'react';

export default function Cart({ cart, removeFromCart }) {
  const [isOpen, setIsOpen] = useState(false);
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <>
      <div className="floating-cart" onClick={() => setIsOpen(true)}>
        <span className="cart-icon">🛒</span>
        {cart.length > 0 && <span className="cart-badge">{cart.length}</span>}
      </div>

      <div className={`cart-sidebar ${isOpen ? 'open' : ''}`}>
        <div className="cart-header">
            <h3>Your Order</h3>
            <button className="close-btn" onClick={() => setIsOpen(false)}>×</button>
        </div>
        <div className="cart-items custom-scrollbar">
            {cart.length === 0 ? (
                <div className="empty-cart">Your cart is empty. Time to order!</div>
            ) : (
                cart.map((item, index) => (
                    <div key={`${item.id}-${index}`} className="cart-item">
                        <img src={item.image} alt={item.name} />
                        <div className="cart-item-info">
                            <h4>{item.name}</h4>
                            <div className="cart-item-price">${item.price.toFixed(2)}</div>
                        </div>
                        <button className="remove-btn" onClick={() => removeFromCart(item.id)}>×</button>
                    </div>
                ))
            )}
        </div>
        
        {cart.length > 0 && (
            <div className="cart-footer">
                <div className="cart-total">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                </div>
                <button className="checkout-btn">Checkout</button>
            </div>
        )}
      </div>
      {isOpen && <div className="cart-overlay" onClick={() => setIsOpen(false)}></div>}
    </>
  );
}
