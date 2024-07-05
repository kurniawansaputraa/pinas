// backend/controllers/ulasanController.js
const Ulasan = require('../models/ulasan');

exports.getAllUlasan = (req, res) => {
    Ulasan.getAll((err, results) => {
        if (err) {
            return res.status(500).json({ error: err });
        }
        res.json(results);
    });
};

exports.getUlasanById = (req, res) => {
    Ulasan.getById(req.params.id, (err, result) => {
        if (err) {
            return res.status(500).json({ error: err });
        }
        if (!result) {
            return res.status(404).json({ message: 'Ulasan tidak ditemukan' });
        }
        res.json(result);
    });
};

exports.createUlasan = (req, res) => {
    const newUlasan = {
        nama: req.body.nama,
        instansi: req.body.instansi,
        email: req.body.email,
        tlp: req.body.tlp,
        pesan: req.body.pesan
    };
    Ulasan.create(newUlasan, (err, result) => {
        if (err) {
            return res.status(500).json({ error: err });
        }
        res.json({ id: result.insertId, ...newUlasan });
    });
};

exports.updateUlasan = (req, res) => {
    const updateUlasan = {
        nama: req.body.nama,
        instansi: req.body.instansi,
        email: req.body.email,
        tlp: req.body.tlp,
        pesan: req.body.pesan
    };
    Ulasan.update(req.params.id, updateUlasan, (err, result) => {
        if (err) {
            return res.status(500).json({ error: err });
        }
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Ulasan tidak ditemukan' });
        }
        res.json({ message: 'Ulasan berhasil diupdate', ...updateUlasan });
    });
};

exports.deleteUlasan = (req, res) => {
    Ulasan.delete(req.params.id, (err, result) => {
        if (err) {
            return res.status(500).json({ error: err });
        }
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Ulasan tidak ditemukan' });
        }
        res.json({ message: 'Ulasan berhasil dihapus' });
    });
};
