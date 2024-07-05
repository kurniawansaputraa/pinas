import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Sewa = () => {
  const [nomorTlp, setNomorTlp] = useState('');
  const [nama, setNama] = useState('');
  const [vesmet, setVesmet] = useState('');
  const [jumlahUnit, setJumlahUnit] = useState(1);
  const [tanggalMulai, setTanggalMulai] = useState('');
  const [tanggalAkhir, setTanggalAkhir] = useState('');
  const [biaya, setBiaya] = useState(0);
  const [metodePembayaran, setMetodePembayaran] = useState('cash');
  const [kendaraanOptions, setKendaraanOptions] = useState([]);
  const [jumlahUnitError, setJumlahUnitError] = useState(null);
  const [nomorTlpError, setNomorTlpError] = useState(null);
  const [namaError, setNamaError] = useState(null);

  useEffect(() => {
    fetchKendaraanOptions();
  }, []);

  const fetchKendaraanOptions = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/kendaraan');
      setKendaraanOptions(response.data);
      // Set default vesmet to the first option
      if (response.data.length > 0) {
        setVesmet(response.data[0].model);
      }
    } catch (error) {
      console.error('Error fetching kendaraan options:', error);
    }
  };

  const handleCalculateBiaya = () => {
    if (!tanggalMulai || !tanggalAkhir || !vesmet) {
      return;
    }

    const selectedVesmet = kendaraanOptions.find(opt => opt.model === vesmet);
    if (selectedVesmet) {
      const startDate = new Date(tanggalMulai);
      const endDate = new Date(tanggalAkhir);
      const diffTime = Math.abs(endDate - startDate);
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

      let totalBiaya = jumlahUnit * selectedVesmet.harga_perhari * diffDays;

      if (diffDays > 3) {
        totalBiaya *= 0.9; 
      }

      setBiaya(totalBiaya);
    }
  };

  const handleJumlahUnitChange = (e) => {
    const value = parseInt(e.target.value);
    if (value < 1) {
      setJumlahUnitError('Jumlah unit harus minimal 1');
    } else {
      setJumlahUnitError(null);
      setJumlahUnit(value);
    }
  };

  const handleNamaChange = (e) => {
    const value = e.target.value;
    const regex = /^[a-zA-Z\s]*$/;
    if (!regex.test(value)) {
      setNamaError('Nama hanya boleh mengandung huruf dan spasi');
    } else {
      setNamaError(null);
      setNama(value);
    }
  };

  const handleNomorTlpChange = (e) => {
    const value = e.target.value;
    const regex = /^[0-9]*$/;
    if (!regex.test(value)) {
      setNomorTlpError('Nomor telepon hanya boleh mengandung angka');
    } else {
      setNomorTlpError(null);
      setNomorTlp(value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (jumlahUnit < 1) {
      setJumlahUnitError('Jumlah unit harus minimal 1');
      return;
    }

    if (!nomorTlp || nomorTlpError) {
      setNomorTlpError('Nomor telepon tidak valid');
      return;
    }

    if (!nama || namaError) {
      setNamaError('Nama tidak valid');
      return;
    }

    const newData = {
      id_kendaraan: kendaraanOptions.find(opt => opt.model === vesmet)?.id || null,
      nama: nama,
      nomor_telepon: nomorTlp,
      tipe_vespa: vesmet,
      jumlah_unit: jumlahUnit,
      tanggal_mulai: tanggalMulai,
      tanggal_akhir: tanggalAkhir,
      biaya: biaya,
      metode_pembayaran: metodePembayaran,
      status: 'aktif'
    };

    try {
      const response = await axios.post('http://localhost:5000/api/sewa', newData);
      console.log('Response after submit:', response.data);

      setNomorTlp('');
      setNama('');
      setVesmet(kendaraanOptions.length > 0 ? kendaraanOptions[0].model : '');
      setJumlahUnit(1);
      setTanggalMulai('');
      setTanggalAkhir('');
      setBiaya(0);
      setMetodePembayaran('cash');
    } catch (error) {
      console.error('Error saat menyimpan data:', error);
    }
  };

  return (
    <div className="min-h-screen p-16">
      <h1 className="text-3xl font-bold mb-6 pt-6">Form Penyewaan Vespa</h1>
      <form onSubmit={handleSubmit} className="space-y-6 border-2 border-zinc-700 p-6 rounded shadow-md">
        <div>
          <label className="block text-sm font-medium">Nomor Telepon</label>
          <input
            type="text"
            value={nomorTlp}
            onChange={handleNomorTlpChange}
            className="bg-gray-900 mt-1 block w-full p-2 border border-gray-300 rounded-md"
            required
          />
          {nomorTlpError && (
            <p className="text-red-500 text-sm">{nomorTlpError}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium">Nama</label>
          <input
            type="text"
            value={nama}
            onChange={handleNamaChange}
            className="bg-gray-900 mt-1 block w-full p-2 border border-gray-300 rounded-md"
            required
          />
          {namaError && (
            <p className="text-red-500 text-sm">{namaError}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium">Pilihan Vesmet</label>
          <select
            value={vesmet}
            onChange={(e) => setVesmet(e.target.value)}
            className="bg-gray-900 mt-1 block w-full p-2 border border-gray-300 rounded-md"
          >
            {kendaraanOptions.map(option => (
              <option key={option.id} value={option.model}>{option.model}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium">Jumlah Unit yang di Sewa</label>
          <input
            type="number"
            value={jumlahUnit}
            onChange={handleJumlahUnitChange}
            onBlur={handleCalculateBiaya}
            className="bg-gray-900 mt-1 block w-full p-2 border border-gray-300 rounded-md"
            required
          />
          {jumlahUnitError && (
            <p className="text-red-500 text-sm">{jumlahUnitError}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium">Tanggal Mulai</label>
          <input
            type="date"
            value={tanggalMulai}
            onChange={(e) => setTanggalMulai(e.target.value)}
            className="bg-gray-900 mt-1 block w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Tanggal Akhir</label>
          <input
            type="date"
            value={tanggalAkhir}
            onChange={(e) => setTanggalAkhir(e.target.value)}
            className="bg-gray-900 mt-1 block w-full p-2 border border-gray-300 rounded-md"
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
            className="bg-gray-900 mt-1 block w-full p-2 border border-gray-300 rounded-md"
          >
            <option value="cash">Cash</option>
            <option value="transfer">Transfer</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium">Syarat dan Ketentuan</label>
          <p className="mt-1 text-sm">
            * Wajib memiliki SIM dan KTP yang masih berlaku.
          </p>
        </div>

        <div>
          <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded-md shadow-sm">
            Submit
          </button>
          <Link to="/data" className="bg-transparent bg-blue-600 text-white py-2 px-4 rounded-md shadow-sm">
            Lihat Data
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Sewa;
