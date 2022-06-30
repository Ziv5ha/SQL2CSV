const { Router } = require('express');
const {
  getMachines,
  getAttributes,
} = require('../controllers/tableController');
const router = Router();

// router.get('/download', )
router.get('/tables', getMachines);
router.get('/attributes/:machine', getAttributes);

module.exports = router;
