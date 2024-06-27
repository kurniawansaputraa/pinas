import React from 'react';
import backgroundImage from '../../assets/images/beranda2.jpg';

const HomeBeranda = () => {
  return (
    <div
        className="home-page bg-cover bg-center min-h-screen"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="min-h-screen flex flex-col md:flex-row justify-center items-center text-white text-shadow-lg p-8 md:p-16">
          <div className="md:w-1/2 flex flex-col justify-center items-center text-center md:items-start">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center md:text-left">Jelajahi Keindahan Bandung dengan Gaya Retro!</h1>
            <p className="text-lg md:text-xl mb-6 text-center md:text-left">Nikmati sensasi berbeda mengelilingi kota Bandung dengan Vespa matic dari Pinas. Sempurna untuk wisata kota, berpetualang, atau sekadar bersantai, sewa Vespa kami menawarkan pengalaman tak terlupakan. Temukan spot-spot menarik dan ciptakan kenangan baru dengan berkendara penuh gaya. Pesan sekarang dan rasakan petualangan seru di Bandung!</p>
            <button className="bg-transparent border-2 border-white text-white py-2 px-8 rounded-md hover:bg-white hover:text-indigo-900 transition duration-300">Sewa</button>
          </div>
          <div className="md:w-1/2">
            {/* Kolom kanan dibiarkan kosong */}
          </div>
        </div>
      </div>
  );
};

export default HomeBeranda;
