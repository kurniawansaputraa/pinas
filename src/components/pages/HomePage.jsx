import React from 'react';
import './HomePage.css'
import HomeBeranda from './HomeBeranda';
import HomeKenapa from './HomeKenapa';
import HomeSection from './HomeSection';

function HomePage() {
  return (
    <div id='beranda' className='home'>
      {/* Bagian pertama dengan gambar latar belakang */}
      <HomeBeranda />

      {/* Bagian "Kenapa Pinas?" dengan warna latar belakang solid */}
      <HomeKenapa />

      {/* Bagian 3 layanan produk */}
      <HomeSection />

    </div>
  );
}

export default HomePage;
