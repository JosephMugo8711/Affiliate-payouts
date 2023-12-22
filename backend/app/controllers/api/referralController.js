const catchAsync = require('../../utils/catchAsync');
const Referral = require('../../models/referralModel');

//Fetch user referrals
exports.getReferrals = catchAsync(async (req, res, next) => {
    const userId = req.user._id.toString();
});

