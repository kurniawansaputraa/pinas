const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

// Buat koneksi ke database
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password', // ganti dengan password MySQL Anda
    database: 'mydatabase' // ganti dengan nama database Anda
});

db.connect(err => {
    if (err) {
        throw err;
    }
    console.log('MySQL connected');
});

app.get('/api/items', (req, res) => {
    const sql = 'SELECT * FROM items';
    db.query(sql, (err, results) => {
        if (err) {
            return res.status(500).json({ error: err });
        }
        res.json(results);
    });
});

app.post('/api/items', (req, res) => {
    const newItem = { name: req.body.name };
    const sql = 'INSERT INTO items SET ?';
    db.query(sql, newItem, (err, result) => {
        if (err) {
            return res.status(500).json({ error: err });
        }
        res.json({ id: result.insertId, ...newItem });
    });
});

const port = 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));
