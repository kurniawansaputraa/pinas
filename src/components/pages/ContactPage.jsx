import React from 'react';

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-16">
      <h1 className="text-3xl font-bold mb-6 py-6">Kontak Kami</h1>
      <form className="border-2 border-zinc-700 p-6 rounded shadow-md w-full max-w-lg space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium">Nama</label>
          <input type="text" id="name" name="name" className="bg-transparent mt-1 block w-full p-2 border border-gray-300 rounded-md" required />
        </div>
        <div>
          <label htmlFor="organization" className="block text-sm font-medium">Instansi</label>
          <input type="text" id="organization" name="organization" className="bg-transparent mt-1 block w-full p-2 border border-gray-300 rounded-md" required />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium">Email</label>
          <input type="email" id="email" name="email" className="bg-transparent mt-1 block w-full p-2 border border-gray-300 rounded-md" required />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium">Nomor Telepon</label>
          <input type="tel" id="phone" name="phone" className="bg-transparent mt-1 block w-full p-2 border border-gray-300 rounded-md" required />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium">Pesan</label>
          <textarea id="message" name="message" className="bg-transparent mt-1 block w-full p-2 border border-gray-300 rounded-md" rows="4" required></textarea>
        </div>
        <div>
          <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600">Kirim</button>
        </div>
      </form>
    </div>
  );
}

export default Contact;
