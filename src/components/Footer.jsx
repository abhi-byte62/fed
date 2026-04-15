import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <div className="logo">Campus<span>Eats</span></div>
          <p className="footer-desc">Fueling the academic journey. Designed exclusively for university faculty and students with priority routing.</p>
        </div>
        
        <div className="footer-links">
          <div className="link-group">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#menu">Menu</a></li>
              <li><a href="#features">Features</a></li>
              <li><a href="#">Support</a></li>
            </ul>
          </div>
          <div className="link-group">
            <h4>Legal</h4>
            <ul>
              <li><a href="#">Terms of Service</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {currentYear} CampusEats. All rights reserved. <br/> Designed & Developed by <strong>abhi</strong>.</p>
      </div>
    </footer>
  );
}
