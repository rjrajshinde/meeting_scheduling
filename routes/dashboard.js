var express = require('express');
var router = express.Router();
const dashboardController = require('../controllers/dashboardController')

/* GET dashboard page. */
router.get('/',dashboardController.renderPage);

module.exports = router;
