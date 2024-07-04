// backend/routes/kendaraanRoutes.js
const express = require('express');
const router = express.Router();
const kendaraanController = require('../controllers/kendaraanControllers');

router.get('/', kendaraanController.getAllKendaraan);
router.get('/:id', kendaraanController.getKendaraanById);
router.post('/', kendaraanController.createKendaraan);
router.put('/:id', kendaraanController.updateKendaraan);
router.delete('/:id', kendaraanController.deleteKendaraan);

module.exports = router;
