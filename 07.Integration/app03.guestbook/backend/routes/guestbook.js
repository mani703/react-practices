const express = require('express');
const controller = require('../controllers/guestbook');

const router = express.Router();

router.route('').get(controller.readAll);

module.exports = router; 