import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FormData = () => {
  const [sewaData, setSewaData] = useState([]);

  useEffect(() => {
    fetchSewaData();
  }, []);

  const fetchSewaData = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/sewa');
      setSewaData(response.data);
    } catch (error) {
      console.error('Error fetching sewa data:', error);
    }
  };

  const handleStatusUpdate = (id) => {
    // Update status to 'selesai' locally
    const updatedSewaData = sewaData.map(item => {
      if (item.id === id) {
        return { ...item, status: 'selesai' };
      }
      return item;
    });

    setSewaData(updatedSewaData);
  };

  return (
    <div className="min-h-screen p-16">
      <h1 className="text-3xl font-bold mb-6">Form Data Penyewaan Vespa</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-transparent border-gray-200 border">
          <thead className="bg-gray-100">
            <tr>
              <th className="border-gray-200 px-6 py-3 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">Nama</th>
              <th className="border-gray-200 px-6 py-3 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">Nomor Telepon</th>
              <th className="border-gray-200 px-6 py-3 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">Tipe Vespa</th>
              <th className="border-gray-200 px-6 py-3 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">Jumlah Unit</th>
              <th className="border-gray-200 px-6 py-3 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">Tanggal Mulai</th>
              <th className="border-gray-200 px-6 py-3 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">Tanggal Akhir</th>
              <th className="border-gray-200 px-6 py-3 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">Biaya</th>
              <th className="border-gray-200 px-6 py-3 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">Metode Pembayaran</th>
              <th className="border-gray-200 px-6 py-3 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">Status</th>
              <th className="border-gray-200 px-6 py-3 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">Aksi</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {sewaData.map((item) => (
              <tr key={item.id}>
                <td className="border-gray-200 px-6 py-4 whitespace-no-wrap">{item.nama}</td>
                <td className="border-gray-200 px-6 py-4 whitespace-no-wrap">{item.nomor_telepon}</td>
                <td className="border-gray-200 px-6 py-4 whitespace-no-wrap">{item.tipe_vespa}</td>
                <td className="border-gray-200 px-6 py-4 whitespace-no-wrap">{item.jumlah_unit}</td>
                <td className="border-gray-200 px-6 py-4 whitespace-no-wrap">{item.tanggal_mulai}</td>
                <td className="border-gray-200 px-6 py-4 whitespace-no-wrap">{item.tanggal_akhir}</td>
                <td className="border-gray-200 px-6 py-4 whitespace-no-wrap">{item.biaya}</td>
                <td className="border-gray-200 px-6 py-4 whitespace-no-wrap">{item.metode_pembayaran}</td>
                <td className="border-gray-200 px-6 py-4 whitespace-no-wrap">{item.status}</td>
                <td className="border-gray-200 px-6 py-4 whitespace-no-wrap">
                  {item.status === 'aktif' && (
                    <button
                      onClick={() => handleStatusUpdate(item.id)}
                      className="bg-blue-500 hover:bg-blue-600 text-white py-1 px-4 rounded-md"
                    >
                      Selesai
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FormData;
