const express = require('express');
const tailorController = require('../controllers/tailorController');
const router = express.Router();

router.get('/dashboard', tailorController.renderTailorDashboard);
router.get('/measurements/:id', tailorController.viewCustomerMeasurements);
router.get('/designs/:id', tailorController.viewDesignRequests);

module.exports = router;
.
