const { Router } = require('express');
const {
  downloadCSV,
  createCSV,
} = require('../controllers/converterController');
const router = Router();

// router.get('/download', )
router.post('/convert', createCSV);
router.get('/download', downloadCSV);

module.exports = router;
