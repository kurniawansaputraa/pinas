import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer text-white min-h-fit">
      <div className="container mx-auto flex flex-col items-center justify-between h-full space-y-8">
        {/* Main Content */}
        <div className="w-full flex flex-col md:flex-row justify-around items-stretch p-6 space-y-8 md:space-y-0">
          <div className="flex flex-col items-start space-y-4 md:w-1/3 m-8">
            <img src="../src/assets/images/PINAS.png" alt="Logo" className="h-auto" />
          </div>

          <div className="flex flex-col items-start space-y-4 md:w-1/3 m-8">
            <p className="text-4xl font-medium">Lokasi Kami</p>
            <p className="text-xl font-medium">Jl. Citarum No.34, Cihapit, Kec. Bandung Wetan, Kota Bandung, Jawa Barat 40116</p>
          </div>

          <div className="flex flex-col items-start space-y-4 md:w-1/3 m-8">
            <p className="text-4xl font-medium">Hubungi Kami</p>
            <p className="text-xl font-medium">081298209994</p>
            <p className="text-xl font-medium">kurnii126@gmail.com</p>
          </div>

        </div>

        {/* Social Media Icons */}
        <div className="w-full flex flex-col md:flex-row justify-around items-stretch p-6 space-y-8 md:space-y-0">
          <div className="flex flex-col items-start space-y-4 md:w-1/3">
            <p className="text-4xl font-medium">Jam Operasional</p>
            <p className="text-xl font-medium">Setiap Hari 24/7</p>
            <p className="text-xl font-medium">Tutup Kiamat</p>
          </div>
          <a href="https://wa.me/+6281298209994" target="_blank" rel="noopener noreferrer">
            <img src="/src/assets/images/icon/icons8-whatsapp-384.png" alt="WhatsApp" className="h-14 m-6" />
          </a>
          <a href="https://instagram.com/rinhyh" target="_blank" rel="noopener noreferrer">
            <img src="/src/assets/images/icon/icons8-instagram-384.png" alt="Instagram" className="h-14 m-6" />
          </a>
          <a href="https://facebook.com/Kurnii" target="_blank" rel="noopener noreferrer">
            <img src="/src/assets/images/icon/icons8-facebook-384.png" alt="Facebook" className="h-14 m-6" />
          </a>
          <a href="https://www.youtube.com/@Gerradwijaya08" target="_blank" rel="noopener noreferrer">
            <img src="/src/assets/images/icon/icons8-youtube-384.png" alt="Youtube" className="h-14 m-6" />
          </a>
        </div>

        {/* Copyright */}
        <div className="text-center mt-6">
          <p className="text-base">Copyright &copy; 2024 - Pinas</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
