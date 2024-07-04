// backend/models/Kendaraan.js
const db = require('../config/db');

class Kendaraan {
    static getAll(callback) {
        const sql = 'SELECT * FROM kendaraan';
        db.query(sql, callback);
    }

    static getById(id, callback) {
        const sql = 'SELECT * FROM kendaraan WHERE id = ?';
        db.query(sql, [id], callback);
    }

    static create(newKendaraan, callback) {
        const sql = 'INSERT INTO kendaraan SET ?';
        db.query(sql, newKendaraan, callback);
    }

    static update(id, updateKendaraan, callback) {
        const sql = 'UPDATE kendaraan SET ? WHERE id = ?';
        db.query(sql, [updateKendaraan, id], callback);
    }

    static delete(id, callback) {
        const sql = 'DELETE FROM kendaraan WHERE id = ?';
        db.query(sql, [id], callback);
    }
}

module.exports = Kendaraan;
