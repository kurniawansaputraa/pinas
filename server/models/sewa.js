// backend/models/Sewa.js
const db = require('../config/db');

class Sewa {
    static getAll(callback) {
        const sql = 'SELECT * FROM sewa';
        db.query(sql, callback);
    }

    static getById(id, callback) {
        const sql = 'SELECT * FROM sewa WHERE id = ?';
        db.query(sql, [id], callback);
    }

    static create(newSewa, callback) {
        const sql = 'INSERT INTO sewa SET ?';
        db.query(sql, newSewa, callback);
    }

    static update(id, updateSewa, callback) {
        const sql = 'UPDATE sewa SET ? WHERE id = ?';
        db.query(sql, [updateSewa, id], callback);
    }

    static delete(id, callback) {
        const sql = 'DELETE FROM sewa WHERE id = ?';
        db.query(sql, [id], callback);
    }
}

module.exports = Sewa;
