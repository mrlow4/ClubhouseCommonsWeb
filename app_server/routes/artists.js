const express = require('express');
const router = express.Router();

const controller = require('../controllers/artists');

router.get('/', controller.getArtists);

module.exports = router;