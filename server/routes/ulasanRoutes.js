// backend/routes/ulasanRoutes.js
const express = require('express');
const router = express.Router();
const ulasanController = require('../controllers/ulasanControllers');

router.get('/', ulasanController.getAllUlasan);
router.get('/:id', ulasanController.getUlasanById);
router.post('/', ulasanController.createUlasan);
router.put('/:id', ulasanController.updateUlasan);
router.delete('/:id', ulasanController.deleteUlasan);

module.exports = router;
