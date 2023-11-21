const express = require('express');
const morgan = require('morgan');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const hpp = require('hpp');
const crypto = require("crypto");
const cookieParser = require('cookie-parser');
const compression = require('compression');
const cors = require('cors');
const session = require('express-session');
const AppError = require('./utils/appError');
const globalErrorHandler = require('./controllers/errorController');
const viewController = require('./routes/viewRoutes');

const app = express();

// Allow specific origins to connect
const allowedOrigins = [
  'http://localhost:8081',
  '*',
];

app.use(
  cors({
    origin: (origin, callback) => {
      if (allowedOrigins.includes(origin) || allowedOrigins.includes('*')) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
  })
);

// Body parser, reading data from body into req.body
app.use(express.json({ limit: '100kb' }));
app.use(express.urlencoded({ extended: true, limit: '100kb' }));
app.use(cookieParser());

// Data sanitization against NoSQL query injection
app.use(mongoSanitize());

// Data sanitization against XSS
app.use(xss());

// Prevent parameter pollution
app.use(
  hpp({
    whitelist: ['name', 'duration', 'slug'],
  })
);

// Compression middleware
app.use(compression());

// Function to generate a secure random string of a specific length
function generateRandomString(length) {
  return crypto.randomBytes(Math.ceil(length / 2)).toString('hex').slice(0, length);
}

// Generate a 32-character secret
const secret = generateRandomString(32);
console.log(secret);

app.use(
  session({
    secret: secret,
    resave: false,
    saveUninitialized: false,
  })
);

app.use('/', viewController);

app.all('*', (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(globalErrorHandler);

module.exports = app;
