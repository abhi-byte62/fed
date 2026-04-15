import React from 'react';

const MENU_ITEMS = [
  { id: 1, name: "Grilled Salmon Bowl", price: 15.99, image: "/salmon.png", desc: "Healthy quinoa, fresh avocado, and wild-caught salmon", tag: "Bestseller", time: "15-20 min" },
  { id: 2, name: "Double Cheeseburger", price: 12.50, image: "/burger.png", desc: "Two smashed beef patties, cheddar, secret sauce, fries", tag: "Must Try", time: "10-15 min" },
  { id: 3, name: "Spicy Miso Ramen", price: 14.00, image: "/ramen.png", desc: "Rich pork broth, soft egg, chashu, and fresh scallions", tag: "Spicy", time: "20-25 min" },
  { id: 4, name: "Artisan Avocado Toast", price: 10.50, image: "/avocado.png", desc: "Fresh smashed avocado, poached egg, chili flakes on rustic bread", tag: "Healthy", time: "5-10 min" },
  { id: 5, name: "Iced Matcha Latte", price: 6.50, image: "/matcha.png", desc: "Premium ceremonial grade matcha, oat milk, iced to perfection", tag: "Drink", time: "2-5 min" }
];

export default function Menu({ addToCart }) {
  return (
    <section className="menu-section" id="menu">
      <h2 className="section-title">Faculty Favorites</h2>
      <div className="dish-grid">
        {MENU_ITEMS.map((item) => (
          <div key={item.id} className="dish-card glass-card">
             <div className="dish-image">
                <img src={item.image} alt={item.name} />
                <div className="dish-tag">{item.tag}</div>
                <div className="dish-time">{item.time}</div>
             </div>
             <div className="dish-content">
                <div className="dish-header">
                  <h3>{item.name}</h3>
                  <div className="dish-price">${item.price.toFixed(2)}</div>
                </div>
                <p className="dish-desc">{item.desc}</p>
                <button className="btn-add" onClick={() => addToCart(item)}>
                  <span>+</span> ADD
                </button>
             </div>
          </div>
        ))}
      </div>
    </section>
  );
}
