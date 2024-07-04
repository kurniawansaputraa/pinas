// backend/controllers/pelangganController.js
const Pelanggan = require('../models/pelanggan');

exports.getAllPelanggan = (req, res) => {
    Pelanggan.getAll((err, results) => {
        if (err) {
            return res.status(500).json({ error: err });
        }
        res.json(results);
    });
};

exports.getPelangganById = (req, res) => {
    Pelanggan.getById(req.params.id, (err, result) => {
        if (err) {
            return res.status(500).json({ error: err });
        }
        if (!result) {
            return res.status(404).json({ message: 'Pelanggan tidak ditemukan' });
        }
        res.json(result);
    });
};

exports.createPelanggan = (req, res) => {
    const newPelanggan = {
        nama_pelanggan: req.body.nama_pelanggan,
        nomor_telepon: req.body.nomor_telepon
    };
    Pelanggan.create(newPelanggan, (err, result) => {
        if (err) {
            return res.status(500).json({ error: err });
        }
        res.json({ id: result.insertId, ...newPelanggan });
    });
};

exports.updatePelanggan = (req, res) => {
    const updatePelanggan = {
        nama_pelanggan: req.body.nama_pelanggan,
        nomor_telepon: req.body.nomor_telepon
    };
    Pelanggan.update(req.params.id, updatePelanggan, (err, result) => {
        if (err) {
            return res.status(500).json({ error: err });
        }
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Pelanggan tidak ditemukan' });
        }
        res.json({ message: 'Pelanggan berhasil diupdate', ...updatePelanggan });
    });
};

exports.deletePelanggan = (req, res) => {
    Pelanggan.delete(req.params.id, (err, result) => {
        if (err) {
            return res.status(500).json({ error: err });
        }
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Pelanggan tidak ditemukan' });
        }
        res.json({ message: 'Pelanggan berhasil dihapus' });
    });
};
