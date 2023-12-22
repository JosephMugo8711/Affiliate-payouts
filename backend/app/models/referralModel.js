const mongoose = require('mongoose');

const referralSchema = new mongoose.Schema({
  referralSlug: {
    type: String,
  },
  referrerId: {
    type: String,
  },
  referredUsername: {
    type: String,
  },
  amount: {
    type: Number,
    required: true,
    default: 0,
  },
  bonus: {
    type: String,
  },
  createdAt: {
    type: Date,
    required: true,
    default: Date.now,
  },
});

const referral = mongoose.model('referral', referralSchema);

module.exports = referral;