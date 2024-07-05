import React, { useState } from 'react';
import axios from 'axios';

const Contact = () => {
  const [nama, setNama] = useState('');
  const [instansi, setInstansi] = useState('');
  const [email, setEmail] = useState('');
  const [nomorTlp, setNomorTlp] = useState('');
  const [pesan, setPesan] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const review = {
      nama: nama,
      instansi: instansi,
      email: email,
      tlp: nomorTlp,
      pesan: pesan
    };

    try {
      const response = await axios.post('http://localhost:5000/api/ulasan', review);
      console.log('Data successfully submitted:', response.data);
      // Reset form fields upon successful submission if needed
      setNama('');
      setInstansi('');
      setEmail('');
      setNomorTlp('');
      setPesan('');
      // Show success message or navigate to another page
    } catch (error) {
      console.error('Error submitting data:', error);
      // Handle error state
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-16">
      <h1 className="text-3xl font-bold mb-6 py-6">Kontak Kami</h1>
      <form onSubmit={handleSubmit} className="border-2 border-zinc-700 p-6 rounded shadow-md w-full max-w-lg space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium">Nama</label>
          <input
            type="text"
            id="name"
            name="name"
            value={nama}
            onChange={(e) => setNama(e.target.value)}
            className="bg-transparent mt-1 block w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div>
          <label htmlFor="organization" className="block text-sm font-medium">Instansi</label>
          <input
            type="text"
            id="organization"
            name="organization"
            value={instansi}
            onChange={(e) => setInstansi(e.target.value)}
            className="bg-transparent mt-1 block w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-transparent mt-1 block w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium">Nomor Telepon</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={nomorTlp}
            onChange={(e) => setNomorTlp(e.target.value)}
            className="bg-transparent mt-1 block w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium">Pesan</label>
          <textarea
            id="message"
            name="message"
            value={pesan}
            onChange={(e) => setPesan(e.target.value)}
            className="bg-transparent mt-1 block w-full p-2 border border-gray-300 rounded-md"
            rows="4"
            required
          ></textarea>
        </div>
        <div>
          <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600">Kirim</button>
        </div>
      </form>
    </div>
  );
}

export default Contact;
