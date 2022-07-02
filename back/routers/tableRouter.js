const { Router } = require('express');
const {
  getMachines,
  getAttributes,
  getReactors,
} = require('../controllers/tableController');
const router = Router();

// router.get('/download', )
router.get('/tables', getMachines);
router.get('/attributes/:machine', getAttributes);
router.get('/reactors/:machine', getReactors);

module.exports = router;
