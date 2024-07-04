// backend/controllers/penyewaanController.js
const Penyewaan = require('../models/penyewaan');

exports.getAllPenyewaan = (req, res) => {
    Penyewaan.getAll((err, results) => {
        if (err) {
            return res.status(500).json({ error: err });
        }
        res.json(results);
    });
};

exports.getPenyewaanById = (req, res) => {
    Penyewaan.getById(req.params.id, (err, result) => {
        if (err) {
            return res.status(500).json({ error: err });
        }
        if (!result) {
            return res.status(404).json({ message: 'Penyewaan tidak ditemukan' });
        }
        res.json(result);
    });
};

exports.createPenyewaan = (req, res) => {
    const newPenyewaan = {
        id_kendaraan: req.body.id_kendaraan,
        id_pelanggan: req.body.id_pelanggan,
        tanggal_mulai: req.body.tanggal_mulai,
        tanggal_selesai: req.body.tanggal_selesai,
        total_biaya: req.body.total_biaya,
        status: req.body.status
    };
    Penyewaan.create(newPenyewaan, (err, result) => {
        if (err) {
            return res.status(500).json({ error: err });
        }
        res.json({ id: result.insertId, ...newPenyewaan });
    });
};

exports.updatePenyewaan = (req, res) => {
    const updatePenyewaan = {
        id_kendaraan: req.body.id_kendaraan,
        id_pelanggan: req.body.id_pelanggan,
        tanggal_mulai: req.body.tanggal_mulai,
        tanggal_selesai: req.body.tanggal_selesai,
        total_biaya: req.body.total_biaya,
        status: req.body.status
    };
    Penyewaan.update(req.params.id, updatePenyewaan, (err, result) => {
        if (err) {
            return res.status(500).json({ error: err });
        }
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Penyewaan tidak ditemukan' });
        }
        res.json({ message: 'Penyewaan berhasil diupdate', ...updatePenyewaan });
    });
};

exports.deletePenyewaan = (req, res) => {
    Penyewaan.delete(req.params.id, (err, result) => {
        if (err) {
            return res.status(500).json({ error: err });
        }
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Penyewaan tidak ditemukan' });
        }
        res.json({ message: 'Penyewaan berhasil dihapus' });
    });
};
