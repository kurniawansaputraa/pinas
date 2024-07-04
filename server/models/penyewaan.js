// backend/models/Penyewaan.js
const db = require('../config/db');

class Penyewaan {
    static getAll(callback) {
        const sql = 'SELECT * FROM penyewaan';
        db.query(sql, callback);
    }

    static getById(id, callback) {
        const sql = 'SELECT * FROM penyewaan WHERE id = ?';
        db.query(sql, [id], callback);
    }

    static create(newPenyewaan, callback) {
        const sql = 'INSERT INTO penyewaan SET ?';
        db.query(sql, newPenyewaan, callback);
    }

    static update(id, updatePenyewaan, callback) {
        const sql = 'UPDATE penyewaan SET ? WHERE id = ?';
        db.query(sql, [updatePenyewaan, id], callback);
    }

    static delete(id, callback) {
        const sql = 'DELETE FROM penyewaan WHERE id = ?';
        db.query(sql, [id], callback);
    }
}

module.exports = Penyewaan;
