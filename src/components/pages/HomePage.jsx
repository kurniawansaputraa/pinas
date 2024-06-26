import React from 'react';
import './HomePage.css'
import backgroundImage from '../../assets/images/beranda2.jpg';
import deliveryIcon from '../../assets/images/delivery.png';
import hargaIcon from '../../assets/images/dollar.png';
import fasilitasIcon from '../../assets/images/hospital-facility.png';
import servisIcon from '../../assets/images/customer-support.png';
import waktuIcon from '../../assets/images/wall-clock.png';

function HomePage() {
  return (
    <div className='home'>
      {/* Bagian pertama dengan gambar latar belakang */}
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

      {/* Bagian "Kenapa Pinas?" dengan warna latar belakang solid */}
      <div className="pinas min-h-screen py-16">
        <h1 className="text-4xl font-bold text-center mb-12 text-white">Kenapa Pinas?</h1>
        <div className="flex flex-wrap justify-center">
          <div className="box flex flex-col items-center bg-transparent border-2 border-white rounded-lg p-4 m-4 w-80">
            <img src={deliveryIcon} alt="icon-delivery" className="w-16 h-16 mb-4" />
            <h2 className="text-2xl font-bold mb-2">Gratis Antar Jemput</h2>
            <p className="text-center">Layanan antar jemput gratis ke stasiun, terminal, dan seluruh penjuru Bandung.</p>
          </div>
          <div className="box flex flex-col items-center bg-transparent border-2 border-white rounded-lg p-6 m-4 w-80">
            <img src={hargaIcon} alt="icon-harga" className="w-16 h-16 mb-4" />
            <h2 className="text-2xl font-bold mb-2">Harga Terbaik</h2>
            <p className="text-center">Harga kami terbaik dengan fasilitas premium dan pembayaran masa kini menggunakan QRIS.</p>
          </div>
          <div className="box flex flex-col items-center bg-transparent border-2 border-white rounded-lg p-6 m-4 w-80">
            <img src={fasilitasIcon} alt="icon-fasilitas" className="w-16 h-16 mb-4" />
            <h2 className="text-2xl font-bold mb-2">Fasilitas</h2>
            <p className="text-center">Sudah termasuk 2 helm SNI gaya Retro, dan 2 jas hujan (jaket + celana).</p>
          </div>
        </div>
        <div className="flex flex-wrap justify-center mt-8">
          <div className="box flex flex-col items-center bg-transparent border-2 border-white rounded-lg p-6 m-4 w-80">
            <img src={servisIcon} alt="icon-servis" className="w-16 h-16 mb-4" />
            <h2 className="text-2xl font-bold mb-2">Bersih dan Terawat</h2>
            <p className="text-center">Unit kami rutin service di dealer resmi, dan kami dalam keadaan bersih, aman, dan terawat.</p>
          </div>
          <div className="box flex flex-col items-center bg-transparent border-2 border-white rounded-lg p-6 m-4 w-80">
            <img src={waktuIcon} alt="icon-waktu" className="w-16 h-16 mb-4" />
            <h2 className="text-2xl font-bold mb-2">Tepat Waktu</h2>
            <p className="text-center">Kami pastikan unit vespa akan kami antar dan jemput sesuai jam yang telah ditentukan.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
