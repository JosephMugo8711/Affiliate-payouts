const express = require('express');
const authController = require('../../controllers/authController');
const referralController = require('../../controllers/api/referralController');

const router = express.Router();

// Protect all routes after this middleware
router.use(authController.protect);

router.get('/userReferrals', referralController.getReferrals);

module.exports = router;