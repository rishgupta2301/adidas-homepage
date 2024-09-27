import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Shop</h3>
          <ul>
            <li><a href="/">Men</a></li>
            <li><a href="/">Women</a></li>
            <li><a href="/">Kids</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>About</h3>
          <ul>
            <li><a href="/">Company Info</a></li>
            <li><a href="/">Careers</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
