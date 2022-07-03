const { Router } = require('express');
const { reconnect } = require('../controllers/connectController');
const { client } = require('../utils/db');
const router = Router();

router.post('/', reconnect);

module.exports = router;
