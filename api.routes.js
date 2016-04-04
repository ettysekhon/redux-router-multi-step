const express = require('express');
const apiController = require('./api.controller');
const router = express.Router(); // eslint-disable-line

router.route('/charge').get(apiController.charge);

module.exports = router;
