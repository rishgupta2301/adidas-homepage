import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <Link to="/">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHlr_vtUeKCrIAeXCnRwgq61q3XiAA_m9W-A&s" alt="Adidas Clone Logo" />
          </Link>
        </div>
        <nav className="header-nav">
          <ul>
            <li><Link to="/">Men</Link></li>
            <li><Link to="/">Women</Link></li>
            <li><Link to="/">Kids</Link></li>
            <li><Link to="/">Sale</Link></li>
          </ul>
        </nav>
        <div className="search-bar">
          <input type="text" placeholder="Search products..." />
        </div>
      </div>
    </header>
  );
}

export default Header;
