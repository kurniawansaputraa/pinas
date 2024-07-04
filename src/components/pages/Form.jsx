import React, { useState } from 'react';

const Sewa = () => {
  const [nomorTlp, setNomorTlp] = useState('');
  const [nama, setNama] = useState('');
  const [vesmet, setVesmet] = useState('vesmet1');
  const [jumlahUnit, setJumlahUnit] = useState(1);
  const [tanggalMulai, setTanggalMulai] = useState('');
  const [tanggalAkhir, setTanggalAkhir] = useState('');
  const [biaya, setBiaya] = useState(0);
  const [metodePembayaran, setMetodePembayaran] = useState('cash');

  const handleCalculateBiaya = () => {
    // Contoh kalkulasi biaya
    setBiaya(jumlahUnit * 100000); // Misalnya biaya per unit adalah 100000
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="min-h-screen p-16">
      <h1 className="text-3xl font-bold mb-6 pt-6">Form Penyewaan Vesmet</h1>
      <form onSubmit={handleSubmit} className="space-y-6 border-2 border-zinc-700 p-6 rounded shadow-md">
        <div>
          <label className="block text-sm font-medium">Nomor Telepon</label>
          <input
            type="text"
            value={nomorTlp}
            onChange={(e) => setNomorTlp(e.target.value)}
            className="bg-transparent mt-1 block w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Nama</label>
          <input
            type="text"
            value={nama}
            onChange={(e) => setNama(e.target.value)}
            className="bg-transparent mt-1 block w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Pilihan Vesmet</label>
          <select
            value={vesmet}
            onChange={(e) => setVesmet(e.target.value)}
            className="bg-transparent mt-1 block w-full p-2 border border-gray-300 rounded-md"
          >
            <option value="vesmet1">Vesmet 1</option>
            <option value="vesmet2">Vesmet 2</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium">Jumlah Unit yang di Sewa</label>
          <input
            type="number"
            value={jumlahUnit}
            onChange={(e) => setJumlahUnit(parseInt(e.target.value))}
            onBlur={handleCalculateBiaya}
            className="bg-transparent mt-1 block w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Tanggal Mulai</label>
          <input
            type="date"
            value={tanggalMulai}
            onChange={(e) => setTanggalMulai(e.target.value)}
            className="bg-transparent mt-1 block w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Tanggal Akhir</label>
          <input
            type="date"
            value={tanggalAkhir}
            onChange={(e) => setTanggalAkhir(e.target.value)}
            className="bg-transparent mt-1 block w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Biaya</label>
          <input
            type="text"
            value={biaya}
            readOnly
            className="bg-gray-900 mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Metode Pembayaran</label>
          <select
            value={metodePembayaran}
            onChange={(e) => setMetodePembayaran(e.target.value)}
            className="bg-transparent mt-1 block w-full p-2 border border-gray-300 rounded-md"
          >
            <option value="cash">Cash</option>
            <option value="credit">Credit</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium">Syarat dan Ketentuan</label>
          <p className="mt-1 text-sm">
            Wajib memiliki SIM dan KTP yang masih berlaku.
          </p>
        </div>

        <div>
          <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded-md shadow-sm">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Sewa;
