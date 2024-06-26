import React, { useState } from 'react';
import './Navbar.css'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar text-white fixed w-full z-10 top-0 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <a href="/">
                <img className="logo" src="../src/assets/images/PINAS.png" alt="Logo" />
              </a>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4 justify-center">
              <a href="#beranda" className="hover:bg-indigo-700 px-3 py-2 rounded-md text-sm font-medium transition duration-300">Beranda</a>
              <a href="#layanan" className="hover:bg-indigo-700 px-3 py-2 rounded-md text-sm font-medium transition duration-300">Layanan</a>
              <a href="#tentang-kami" className="hover:bg-indigo-700 px-3 py-2 rounded-md text-sm font-medium transition duration-300">Tentang Kami</a>
              <a href="#kontak-kami" className="hover:bg-indigo-700 px-3 py-2 rounded-md text-sm font-medium transition duration-300">Kontak Kami</a>
            </div>
          </div>
          <div className="hidden md:block">
            <a href="#sewa" className="bg-white text-indigo-900 hover:bg-gray-200 px-6 py-2 rounded-md text-sm font-medium transition duration-300">Sewa</a>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-indigo-700 focus:outline-none focus:bg-indigo-700 focus:text-white">
              <span className="sr-only">Open main menu</span>
              <svg className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
              <svg className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a href="#beranda" className="hover:bg-indigo-700 block px-3 py-2 rounded-md text-base font-medium transition duration-300">Beranda</a>
          <a href="#layanan" className="hover:bg-indigo-700 block px-3 py-2 rounded-md text-base font-medium transition duration-300">Layanan</a>
          <a href="#tentang-kami" className="hover:bg-indigo-700 block px-3 py-2 rounded-md text-base font-medium transition duration-300">Tentang Kami</a>
          <a href="#kontak-kami" className="hover:bg-indigo-700 block px-3 py-2 rounded-md text-base font-medium transition duration-300">Kontak Kami</a>
          <a href="#sewa" className="bg-white text-indigo-900 hover:bg-gray-200 block px-9 py-2 rounded-md text-base font-medium transition duration-300">Sewa</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
