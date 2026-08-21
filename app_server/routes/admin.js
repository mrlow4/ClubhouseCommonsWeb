const express = require('express');
const router = express.Router();

const controller = require('../controllers/admin');
const auth = require('../middleware/auth');

router.get('/', auth.requireAdmin, controller.getAdmin);

module.exports = router;