const express = require('express');
const router = express.Router();
const controller = require('../controllers/login');

router.get('/', controller.getLogin);

router.post('/', controller.login);

router.post('/logout', controller.logout);

module.exports = router;