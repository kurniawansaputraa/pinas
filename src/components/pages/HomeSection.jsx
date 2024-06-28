import React from 'react';

const HomeSection = () => {
  const items = [
    {
      imgSrc: 'src/assets/images/blue-125.png',
      title: 'Vespa LX 125 I-Get Facelift',
      description: 'A fresh breeze to the timeless classic.',
      buttonLink: '#link1',
      prices: {
        oneDay: 'Rp 200.000/hari',
        twoDays: 'Diskon 10% untuk reservasi lebih dari 3 hari'
      }
    },
    {
      imgSrc: 'src/assets/images/green-150.png',
      title: 'Vespa Primavera 150 I-Get ABS Facelift',
      description: 'The iconic symbol of passion is the quintessence of urban chic.',
      buttonLink: '#link2',
      prices: {
        oneDay: 'Rp 225.000/hari',
        twoDays: 'Diskon 10% untuk reservasi lebih dari 3 hari'
      }
    },
    {
      imgSrc: 'src/assets/images/white-150-abs.png',
      title: 'Vespa GTS Super 150 I-Get ABS Facelift',
      description: 'Perfect for those who like to ride in greater comfort with an elegant and sophisticated look.',
      buttonLink: '#link3',
      prices: {
        oneDay: 'Rp 275.000/hari',
        twoDays: 'Diskon 10% untuk reservasi lebih dari 3 hari'
      }
    },
  ];

  return (
    <div id='services' className="container mx-auto py-16">
      <h1 className="text-4xl font-bold text-center mb-12 text-white">Produk dan Layanan Pinas</h1>
      {items.map((item, index) => (
        <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className='p-6'>
            <img src={item.imgSrc} alt={item.title} className="w-full h-auto" />
          </div>
          <div className="flex flex-col justify-center items-start p-8">
            <h2 className="text-2xl font-semibold mb-4">{item.title}</h2>
            <p className="text-base mb-4">{item.description}</p>
            <div className="text-base font-medium mb-4">
              <p>Harga mulai dari : {item.prices.oneDay}</p>
              <p>{item.prices.twoDays}</p>
            </div>
            <p>Harga sudah termasuk</p>
            <p>- 2 Helm JP Bigie Retro</p>
            <p>- 2 Jas Hujan</p>
            <p className='pb-3'>- Layanan gratis antar jemput</p>
            <a
              href={item.buttonLink}
              className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition duration-300"
            >
              Sewa
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HomeSection;
