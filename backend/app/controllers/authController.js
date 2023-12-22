const jwt = require('jsonwebtoken');
const User = require('../models/userModel');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');
const Referral = require('../models/referralModel');


const signToken = (id) =>
  jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });

const createSendToken = (user, statusCode, req, res) => {
  const token = signToken(user._id);

  res.cookie('jwt', token, {
    expires: new Date(
      Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 100
    ),
    httpOnly: true,
    secure: req.secure || req.headers['x-forwarded-proto'] === 'https',
  });

  // Remove sensitive information from the output
  user.password = undefined;

  res.status(statusCode).json({
    status: 'success',
    token,
    data: { user },
  });
};

// Sign up user
exports.signup = catchAsync(async (req, res, next) => {
  // 1. Find the referrer using the referral code
  const users = await User.find({ referralCode: req.body.referralCode });
  const referrer = users[0]; // Get the first user with the referral code

  // 2. Create a new user
  const newUser = await User.create({
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    password: req.body.password,
    passwordConfirm: req.body.passwordConfirm,
    referrer: referrer ? referrer._id : null, 
  });

  // 3. Referral combination
  async function createReferral(referrer, referred, bonus) {
    // Create a referral record in the database
    await Referral.create({
      referrerId: referrer._id,
      referredUsername: referred.name,
      bonus,
      combination: referrer._id + referred._id,
    });
  }

  if (referrer) {
    // 4. Create referral for the new user
    await createReferral(referrer, newUser, '5%');
  }


  res.status(201).json({
    status: 'success',
    data: { message: 'Account created!' },
  });
});


exports.login = catchAsync(async (req, res, next) => {
    const { email, password } = req.body;
  
    // 1) Check if email and password exist
    if (!email || !password) {
      return next(new AppError('Please provide email and password!', 400));
    }
  
    // 2) Check if email exists && password is correct
    const user = await User.findOne({ email }).select('+password');
    if (!user || !(await user.correctPassword(password, user.password))) {
      return next(new AppError('Incorrect email or password', 401));
    }
  
    // 3) If everything ok, send token to client
    createSendToken(user, 200, req, res);
  });

  exports.protect = catchAsync(async (req, res, next) => {
    let token;
  
    // Get token from headers or cookies
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
      token = req.headers.authorization.split(' ')[1];
    } else if (req.cookies.jwt) {
      token = req.cookies.jwt;
    }
  
    // Check if token exists
    if (!token) {
      return next(new AppError('You are not logged in! Please log in to get access.', 401));
    }
  
    // Verify token
    const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);
  
    // Check if user still exists
    const currentUser = await User.findById(decoded.id);
    if (!currentUser) {
      return next(new AppError('The user belonging to this token does no longer exist.', 401));
    }
  
    // Grant access to protected route
    req.user = currentUser;
    res.locals.user = currentUser;
    next();
  });
  