// backend/routes/pelangganRoutes.js
const express = require('express');
const router = express.Router();
const pelangganController = require('../controllers/pelangganControllers');

router.get('/', pelangganController.getAllPelanggan);
router.get('/:id', pelangganController.getPelangganById);
router.post('/', pelangganController.createPelanggan);
router.put('/:id', pelangganController.updatePelanggan);
router.delete('/:id', pelangganController.deletePelanggan);

module.exports = router;
