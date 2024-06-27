import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer text-white py-6">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
        {/* Logo, Operating Hours, and Social Media Icons */}
        <div className="flex flex-col md:flex-row items-center md:items-start md:space-x-4 mb-4 md:mb-0">
          <div className="flex items-center space-x-4 mb-2 md:mb-0">
            <img src="../src/assets/images/PINAS.png" alt="Logo" className="h-16" />
            <p className="text-sm font-medium">Lokasi: Jl. Contoh No. 123, Kota Anda</p>
          </div>
          <div className="flex flex-col md:flex-row items-center space-x-4">
            <p className="text-sm font-medium">Hubungi Kami: (123) 456-7890</p>
            <p className="text-sm font-medium">Jam Operasional: Senin - Jumat, 09.00 - 17.00 WIB</p>
          </div>
          <div className="flex items-center space-x-4 mt-2 md:mt-0">
            <a href="https://facebook.com/mywebsite" target="_blank" rel="noopener noreferrer">
              <img src="/path/to/facebook-icon.png" alt="Facebook" className="h-6" />
            </a>
            <a href="https://twitter.com/mywebsite" target="_blank" rel="noopener noreferrer">
              <img src="/path/to/twitter-icon.png" alt="Twitter" className="h-6" />
            </a>
            <a href="https://instagram.com/mywebsite" target="_blank" rel="noopener noreferrer">
              <img src="/path/to/instagram-icon.png" alt="Instagram" className="h-6" />
            </a>
            <a href="https://linkedin.com/mywebsite" target="_blank" rel="noopener noreferrer">
              <img src="/path/to/linkedin-icon.png" alt="LinkedIn" className="h-6" />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center mt-4">
        <p className="text-sm">&copy; 2024 MyWebsite. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
