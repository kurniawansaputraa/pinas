// backend/models/Pembayaran.js
const db = require('../config/db');

class Pembayaran {
    static getAll(callback) {
        const sql = 'SELECT * FROM pembayaran';
        db.query(sql, callback);
    }

    static getById(id, callback) {
        const sql = 'SELECT * FROM pembayaran WHERE id = ?';
        db.query(sql, [id], callback);
    }

    static create(newPembayaran, callback) {
        const sql = 'INSERT INTO pembayaran SET ?';
        db.query(sql, newPembayaran, callback);
    }

    static update(id, updatePembayaran, callback) {
        const sql = 'UPDATE pembayaran SET ? WHERE id = ?';
        db.query(sql, [updatePembayaran, id], callback);
    }

    static delete(id, callback) {
        const sql = 'DELETE FROM pembayaran WHERE id = ?';
        db.query(sql, [id], callback);
    }
}

module.exports = Pembayaran;
