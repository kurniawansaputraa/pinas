// backend/models/Pelanggan.js
const db = require('../config/db');

class Pelanggan {
    static getAll(callback) {
        const sql = 'SELECT * FROM pelanggan';
        db.query(sql, callback);
    }

    static getById(id, callback) {
        const sql = 'SELECT * FROM pelanggan WHERE id = ?';
        db.query(sql, [id], callback);
    }

    static create(newPelanggan, callback) {
        const sql = 'INSERT INTO pelanggan SET ?';
        db.query(sql, newPelanggan, callback);
    }

    static update(id, updatePelanggan, callback) {
        const sql = 'UPDATE pelanggan SET ? WHERE id = ?';
        db.query(sql, [updatePelanggan, id], callback);
    }

    static delete(id, callback) {
        const sql = 'DELETE FROM pelanggan WHERE id = ?';
        db.query(sql, [id], callback);
    }
}

module.exports = Pelanggan;
