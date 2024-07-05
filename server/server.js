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
const sewaRoutes = require('./routes/sewaRoutes');
const ulasanRoutes = require('./routes/ulasanRoutes');

app.use('/api/kendaraan', kendaraanRoutes);
app.use('/api/sewa', sewaRoutes);
app.use('/api/ulasan', ulasanRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
