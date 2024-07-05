// backend/routes/sewaRoutes.js
const express = require('express');
const router = express.Router();
const sewaController = require('../controllers/sewaController');

router.get('/', sewaController.getAllSewa);
router.get('/:id', sewaController.getSewaById);
router.post('/', sewaController.createSewa);
router.put('/:id', sewaController.updateSewa);
router.delete('/:id', sewaController.deleteSewa);

module.exports = router;
