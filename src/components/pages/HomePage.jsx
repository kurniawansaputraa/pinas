import React from 'react';
import './HomePage.css'; 
// import backgroundImage from '../../assets/images/beranda2.jpg';

function HomePage() {
  return (
    <div className="home-page">
      <div className="home-page-content">
        <div className="left-column">
          <h1 className='home-page-title'>Jelajahi Keindahan Bandung dengan Gaya Retro!</h1>
          <p>Nikmati sensasi berbeda mengelilingi kota Bandung dengan Vespa matic dari Pinas. Sempurna untuk wisata kota, berpetualang, atau sekadar bersantai, sewa Vespa kami menawarkan pengalaman tak terlupakan. Temukan spot-spot menarik dan ciptakan kenangan baru dengan berkendara penuh gaya. Pesan sekarang dan rasakan petualangan seru di Bandung!</p>
          <button className="button-sewa">Sewa</button>
        </div>
        <div className="right-column">
          {/* Kolom kanan dibiarkan kosong */}
        </div>
      </div>
      <div className='home-page-kenapa-pinas'>
        <h1>Kenapa Pinas?</h1>
      </div>
    </div>
  );
}

export default HomePage;