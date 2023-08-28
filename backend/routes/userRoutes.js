const express = require('express');
const userController = require('../controllers/userController');
const router = express.Router();

router.get('/dashboard', userController.renderUserDashboard);
router.post('/measurements', userController.submitMeasurements);

module.exports = router;
