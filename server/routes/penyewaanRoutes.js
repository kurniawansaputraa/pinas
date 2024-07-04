// backend/routes/penyewaanRoutes.js
const express = require('express');
const router = express.Router();
const penyewaanController = require('../controllers/penyewaanControllers');

router.get('/', penyewaanController.getAllPenyewaan);
router.get('/:id', penyewaanController.getPenyewaanById);
router.post('/', penyewaanController.createPenyewaan);
router.put('/:id', penyewaanController.updatePenyewaan);
router.delete('/:id', penyewaanController.deletePenyewaan);

module.exports = router;
