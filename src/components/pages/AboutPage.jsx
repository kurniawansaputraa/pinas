// About.js

import React from 'react';

const About = () => {
  return (
    <div id='about' className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 m-16 px-16">
      <div className="mb-8 py-10">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">Tentang Kami</h2>
        <p className="text-lg leading-relaxed">
          Pinas memulai penyewaan vespa matic di Bandung dengan fokus pada kota-kota besar dan pusat bisnis, di mana mobilitas tinggi menjadi kebutuhan utama. Kami menargetkan para pengguna yang menghargai gaya hidup santai dan klasik, baik untuk menikmati kesibukan perkotaan maupun petualangan wisata alam, dengan menawarkan pengalaman transportasi yang ramah lingkungan melalui vespa matic yang ikonis.
        </p>
        <p className="text-lg leading-relaxed py-3">
          Kami siap melayani dengan senang hati saat anda berada di Bandung, dan akan memberikan service terbaik saat anda menyewa Vespa di Pinas. Vespa berdesain retro telah menjadi skutik paling unik, bergaya dan paling dicintai hingga saat ini di dunia.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Profil Pendiri */}
        <div className="flex flex-col items-center">
          <img src="src/assets/images/founder/kurniawan.png" alt="Founder 1" className="rounded-full h-32 w-32 mb-2 object-cover" />
          <h3 className="text-lg font-bold">Kurniawan Saputra</h3>
          <h3 className="text-lg font-bold">As Founder</h3>
          <p className="text-gray-600">312210035</p>
        </div>
        
        <div className="flex flex-col items-center">
          <img src="src/assets/images/founder/selma.jpeg" alt="Founder 2" className="rounded-full h-32 w-32 mb-2 object-cover" />
          <h3 className="text-lg font-bold">Selma Ohoira</h3>
          <p className="text-gray-600">312210727</p>
        </div>
        
        <div className="flex flex-col items-center">
          <img src="founder3.jpg" alt="Founder 3" className="rounded-full h-32 w-32 mb-2 object-cover" />
          <h3 className="text-lg font-bold">Nama Pendiri 3</h3>
          <p className="text-gray-600">Jabatan Pendiri 3</p>
        </div>
      </div>
    </div>
  );
};

export default About;
