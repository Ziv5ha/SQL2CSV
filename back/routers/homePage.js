const { Router } = require('express');
const hopePage = require('../controllers/homePage');
const router = Router();

router.post('/', hopePage);

module.exports = router;
