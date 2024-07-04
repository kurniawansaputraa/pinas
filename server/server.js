// backend/index.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Routes
const kendaraanRoutes = require('./routes/kendaraanRoutes');
const pelangganRoutes = require('./routes/pelangganRoutes');
const penyewaanRoutes = require('./routes/penyewaanRoutes');
const pembayaranRoutes = require('./routes/pembayaranRoutes');
const ulasanRoutes = require('./routes/ulasanRoutes');

app.use('/api/kendaraan', kendaraanRoutes);
app.use('/api/pelanggan', pelangganRoutes);
app.use('/api/penyewaan', penyewaanRoutes);
app.use('/api/pembayaran', pembayaranRoutes);
app.use('/api/ulasan', ulasanRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
