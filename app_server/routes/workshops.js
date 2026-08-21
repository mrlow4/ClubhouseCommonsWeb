const express = require('express');
const router = express.Router();

const controller = require('../controllers/workshops');

router.get('/', controller.getWorkshops);

module.exports = router;