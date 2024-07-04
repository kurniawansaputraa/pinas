// backend/controllers/kendaraanController.js
const Kendaraan = require('../models/kendaraan');

exports.getAllKendaraan = (req, res) => {
    Kendaraan.getAll((err, results) => {
        if (err) {
            return res.status(500).json({ error: err });
        }
        res.json(results);
    });
};

exports.getKendaraanById = (req, res) => {
    Kendaraan.getById(req.params.id, (err, result) => {
        if (err) {
            return res.status(500).json({ error: err });
        }
        if (!result) {
            return res.status(404).json({ message: 'Kendaraan tidak ditemukan' });
        }
        res.json(result);
    });
};

exports.createKendaraan = (req, res) => {
    const newKendaraan = {
        model: req.body.model,
        jumlah: req.body.jumlah,
        status: req.body.status,
        harga_perhari: req.body.harga_perhari
    };
    Kendaraan.create(newKendaraan, (err, result) => {
        if (err) {
            return res.status(500).json({ error: err });
        }
        res.json({ id: result.insertId, ...newKendaraan });
    });
};

exports.updateKendaraan = (req, res) => {
    const updateKendaraan = {
        model: req.body.model,
        jumlah: req.body.jumlah,
        status: req.body.status,
        harga_perhari: req.body.harga_perhari
    };
    Kendaraan.update(req.params.id, updateKendaraan, (err, result) => {
        if (err) {
            return res.status(500).json({ error: err });
        }
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Kendaraan tidak ditemukan' });
        }
        res.json({ message: 'Kendaraan berhasil diupdate', ...updateKendaraan });
    });
};

exports.deleteKendaraan = (req, res) => {
    Kendaraan.delete(req.params.id, (err, result) => {
        if (err) {
            return res.status(500).json({ error: err });
        }
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Kendaraan tidak ditemukan' });
        }
        res.json({ message: 'Kendaraan berhasil dihapus' });
    });
};
