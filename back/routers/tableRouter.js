const { Router } = require('express');
const {
  getTables,
  getAttributes,
  getReactors,
} = require('../controllers/tableController');
const router = Router();

// router.get('/download', )
router.get('/tables', getTables);
router.get('/attributes/:machine', getAttributes);
router.get('/reactors/:machine', getReactors);

module.exports = router;
