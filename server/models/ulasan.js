// backend/models/Ulasan.js
const db = require('../config/db');

class Ulasan {
    static getAll(callback) {
        const sql = 'SELECT * FROM ulasan';
        db.query(sql, callback);
    }

    static getById(id, callback) {
        const sql = 'SELECT * FROM ulasan WHERE id = ?';
        db.query(sql, [id], callback);
    }

    static create(newUlasan, callback) {
        const sql = 'INSERT INTO ulasan SET ?';
        db.query(sql, newUlasan, callback);
    }

    static update(id, updateUlasan, callback) {
        const sql = 'UPDATE ulasan SET ? WHERE id = ?';
        db.query(sql, [updateUlasan, id], callback);
    }

    static delete(id, callback) {
        const sql = 'DELETE FROM ulasan WHERE id = ?';
        db.query(sql, [id], callback);
    }
}

module.exports = Ulasan;
