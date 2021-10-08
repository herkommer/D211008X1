var express = require('express');
var router = express.Router();

var home_controller = require('../controllers/homeController');

router.get('/', home_controller.index);
router.post('/', home_controller.input);

module.exports = router;