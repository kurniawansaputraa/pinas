// backend/controllers/sewaController.js

const Sewa = require('../models/sewa');

// Mendapatkan semua data sewa
exports.getAllSewa = (req, res) => {
    Sewa.getAll((err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(results);
    });
};

// Mendapatkan data sewa berdasarkan ID
exports.getSewaById = (req, res) => {
    Sewa.getById(req.params.id, (err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        if (!result) {
            return res.status(404).json({ message: 'Data sewa tidak ditemukan' });
        }
        res.json(result);
    });
};

// Membuat data sewa baru
exports.createSewa = (req, res) => {
    const newSewa = {
        id_kendaraan: req.body.id_kendaraan,
        nama: req.body.nama,
        nomor_telepon: req.body.nomor_telepon,
        tipe_vespa: req.body.tipe_vespa,
        jumlah_unit: req.body.jumlah_unit,
        tanggal_mulai: req.body.tanggal_mulai,
        tanggal_akhir: req.body.tanggal_akhir,
        biaya: req.body.biaya,
        metode_pembayaran: req.body.metode_pembayaran,
        status: req.body.status
    };

    Sewa.create(newSewa, (err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json({ id: result.insertId, ...newSewa });
    });
};

// Memperbarui data sewa berdasarkan ID
exports.updateSewa = (req, res) => {
    const updateSewa = {
        id_kendaraan: req.body.id_kendaraan,
        nama: req.body.nama,
        nomor_telepon: req.body.nomor_telepon,
        tipe_vespa: req.body.tipe_vespa,
        jumlah_unit: req.body.jumlah_unit,
        tanggal_mulai: req.body.tanggal_mulai,
        tanggal_akhir: req.body.tanggal_akhir,
        biaya: req.body.biaya,
        metode_pembayaran: req.body.metode_pembayaran,
        status: req.body.status
    };

    Sewa.update(req.params.id, updateSewa, (err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Data sewa tidak ditemukan' });
        }
        res.json({ message: 'Data sewa berhasil diperbarui', ...updateSewa });
    });
};

// Menghapus data sewa berdasarkan ID
exports.deleteSewa = (req, res) => {
    Sewa.delete(req.params.id, (err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Data sewa tidak ditemukan' });
        }
        res.json({ message: 'Data sewa berhasil dihapus' });
    });
};
