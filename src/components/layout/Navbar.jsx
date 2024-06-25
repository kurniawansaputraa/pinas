import React from 'react';
import './Navbar.css';
import logo from '../../assets/images/PINAS.png'; 

function Navbar() {
  return (
    <nav className="navbar">
      <img src={logo} alt="Logo" className="navbar-logo" />
      <div className="navbar-links">
        <a href="/">Beranda</a>
        <a href="/services">Layanan</a>
        <a href="/about">Tentang Kami</a>
        <a href="/contact">Kontak</a>
      </div>
      <button className='btn-nav'>Sewa</button>
    </nav>
  );
}

export default Navbar;