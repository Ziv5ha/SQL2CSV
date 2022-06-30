const { Router } = require('express');
const { testFunc, getTest } = require('../controllers/testController');
const router = Router();

router.get('/get', getTest);
router.get('/create-db', testFunc);

module.exports = router;
