// backend/controllers/pembayaranController.js
const Pembayaran = require('../models/pembayaran');

exports.getAllPembayaran = (req, res) => {
    Pembayaran.getAll((err, results) => {
        if (err) {
            return res.status(500).json({ error: err });
        }
        res.json(results);
    });
};

exports.getPembayaranById = (req, res) => {
    Pembayaran.getById(req.params.id, (err, result) => {
        if (err) {
            return res.status(500).json({ error: err });
        }
        if (!result) {
            return res.status(404).json({ message: 'Pembayaran tidak ditemukan' });
        }
        res.json(result);
    });
};

exports.createPembayaran = (req, res) => {
    const newPembayaran = {
        id_penyewaan: req.body.id_penyewaan,
        jumlah_pembayaran: req.body.jumlah_pembayaran,
        tanggal_pembayaran: req.body.tanggal_pembayaran,
        metode_pembayaran: req.body.metode_pembayaran
    };
    Pembayaran.create(newPembayaran, (err, result) => {
        if (err) {
            return res.status(500).json({ error: err });
        }
        res.json({ id: result.insertId, ...newPembayaran });
    });
};

exports.updatePembayaran = (req, res) => {
    const updatePembayaran = {
        id_penyewaan: req.body.id_penyewaan,
        jumlah_pembayaran: req.body.jumlah_pembayaran,
        tanggal_pembayaran: req.body.tanggal_pembayaran,
        metode_pembayaran: req.body.metode_pembayaran
    };
    Pembayaran.update(req.params.id, updatePembayaran, (err, result) => {
        if (err) {
            return res.status(500).json({ error: err });
        }
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Pembayaran tidak ditemukan' });
        }
        res.json({ message: 'Pembayaran berhasil diupdate', ...updatePembayaran });
    });
};

exports.deletePembayaran = (req, res) => {
    Pembayaran.delete(req.params.id, (err, result) => {
        if (err) {
            return res.status(500).json({ error: err });
        }
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Pembayaran tidak ditemukan' });
        }
        res.json({ message: 'Pembayaran berhasil dihapus' });
    });
};
