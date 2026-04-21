import React, { useState } from 'react';
import Menu from './components/Menu';
import Cart from './components/Cart';
import AuthModal from './components/AuthModal';
import Footer from './components/Footer';
import './index.css';

function App() {
  const [role, setRole] = useState('lecturer');
  const [cart, setCart] = useState([]);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState('');

  const clearCart = () => setCart([]);

  const addToCart = (item) => setCart([...cart, item]);
  const removeFromCart = (id) => {
    const index = cart.findIndex(i => i.id === id);
    if (index !== -1) {
      const newCart = [...cart];
      newCart.splice(index, 1);
      setCart(newCart);
    }
  };

  return (
    <div className={`app-container ${role === 'lecturer' ? 'theme-lecturer' : 'theme-student'}`}>
      <nav className="navbar">
        <div className="logo">Campus<span>Eats</span></div>
        <ul className="nav-links">
          <li><a href="#menu">Menu</a></li>
          <li><a href="#features">Features</a></li>
          <li>
            {isLoggedIn ? (
              <button className="btn-primary" onClick={() => { setIsLoggedIn(false); setUserName(''); }}>Logout ({userName})</button>
            ) : (
              <button className="btn-primary" onClick={() => setIsAuthOpen(true)}>Login</button>
            )}
          </li>
        </ul>
      </nav>

      <header className="hero">
        <div className="hero-content">
          {role === 'lecturer' ? (
            <div className="badge lecturer-badge">🚀 Introducing Faculty Fast-Track</div>
          ) : (
            <div className="badge student-badge">🎓 CampusEats for Students</div>
          )}

          <h1 className="hero-title">
            {role === 'lecturer' ? (
              <>Your Next Lecture Started.<br />Your Lunch is <span className="gradient-text">Already Here.</span></>
            ) : (
              <>Study Hard.<br />Eat <span className="gradient-text">Well.</span></>
            )}
          </h1>

          <p className="hero-subtitle">
            {role === 'lecturer'
              ? 'The first campus food delivery platform designed around the schedules of university lecturers. Skip the line, because your time is for teaching.'
              : 'Get hot meals delivered straight to your dorm or library desk. Affordable pricing tailored for the student budget.'}
          </p>

          <div className="role-selector">
            <button
              className={`role-btn ${role === 'lecturer' ? 'active' : ''}`}
              onClick={() => setRole('lecturer')}
            >
              I am a Lecturer (Priority)
            </button>
            <button
              className={`role-btn ${role === 'student' ? 'active' : ''}`}
              onClick={() => setRole('student')}
            >
              I am a Student
            </button>
          </div>

          <div className="hero-cta">
            <a href="#menu" className="btn-glow" style={{ display: 'inline-block', textDecoration: 'none' }}>Order Now</a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="glass-card mockup-card">
            <div className="card-header">
              <span className="status-dot"></span>
              <span>Live Order Tracker</span>
            </div>
            <div className="order-info">
              <div className="order-title">
                {role === 'lecturer' ? 'Grilled Salmon Bowl 🥗' : 'Double Cheeseburger 🍔'}
              </div>
              <div className={`faculty-tag ${role === 'lecturer' ? 'tag-lecturer' : 'tag-student'}`}>
                {role === 'lecturer' ? 'Faculty Priority Active' : 'Standard Delivery'}
              </div>
            </div>
            <div className="progress-bar">
              <div className="progress-fill"></div>
            </div>
            <div className="eta">
              {role === 'lecturer' ? (
                <>Est. Delivery to Block B: <strong>4 mins</strong></>
              ) : (
                <>Est. Delivery to Dorm 4: <strong>25 mins</strong></>
              )}
            </div>
          </div>
        </div>
      </header>

      <Menu addToCart={addToCart} />

      <section id="features" className="features">
        <h2>Built for the Academic Rush</h2>
        <div className="feature-grid">
          <div className="feature-card glass-card">
            <div className="icon">⚡</div>
            <h3>Skipping The Queue</h3>
            <p>Lecturer orders are routed directly to the front of the kitchen queue automatically to ensure fast preparation.</p>
          </div>
          <div className="feature-card glass-card">
            <div className="icon">⏱️</div>
            <h3>Schedule Sync</h3>
            <p>Sync with your academic timetable. Hot food arrives exactly when your lecture ends.</p>
          </div>
          <div className="feature-card glass-card">
            <div className="icon">🏢</div>
            <h3>Desk Delivery</h3>
            <p>We skip the cafeteria drop-offs and deliver right to department offices, staff rooms, and active lecture halls.</p>
          </div>
        </div>
      </section>

      <Footer />
      <Cart cart={cart} removeFromCart={removeFromCart} clearCart={clearCart} />
      <AuthModal
        isOpen={isAuthOpen}
        onClose={() => setIsAuthOpen(false)}
        onLogin={(name) => {
          setIsLoggedIn(true);
          setUserName(name || 'User');
          setIsAuthOpen(false);
        }}
      />
    </div>
  );
}

export default App;
