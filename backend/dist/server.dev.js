"use strict";

var express = require('express');

var mongoose = require('mongoose');

var userRouter = require('./routers/user.js');

var productRouter = require('./routers/product.js');

var orderRouter = require('./routers/orderRouter.js');

var dotenv = require('dotenv');

var path = require('path');

var Razorpay = require('razorpay');

var multer = require('multer');

var restAuth = require('./utils').restAuth;

dotenv.config();
var razorpayPublicKey = "rzp_test_tjgqJf8OgEA215";
var razorpaySecretKey = "0wIdYCiuPh7ydfOwhvTKyKEP";
console.log("razorpayPublickey", razorpayPublicKey);
console.log("razorpayPublickey", razorpaySecretKey);
var instance = new Razorpay({
  key_id: razorpayPublicKey,
  key_secret: razorpaySecretKey
});
var app = express();
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));
var port = process.env.PORT || 5000;
mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost/berlywud', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
}); //Serving Berlywud logo

app.get('/berlywud.png', function (req, res) {
  res.sendFile(path.join(__dirname, "greylogo2025.png"));
});

var _dirname = path.resolve();

app.use('/uploads', express["static"](path.join(_dirname, '/uploads'))); // app.use(express.static(path.join(_dirname, '/frontend/build')));
// app.get('*', (req, res) =>
//   res.sendFile(path.join(_dirname, '/frontend/build/index.html'))
// );
//Payment routes

app.post('/razorpay', function _callee(req, res) {
  var response;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(instance.orders.create({
            amount: req.body.amount,
            reciept: req.body.reciept
          }));

        case 3:
          response = _context.sent;
          res.json({
            id: response.id,
            amount: response.amount
          });
          _context.next = 10;
          break;

        case 7:
          _context.prev = 7;
          _context.t0 = _context["catch"](0);
          console.log(_context.t0);

        case 10:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 7]]);
});
app.post("/payment/success", function _callee2(req, res) {
  var crypto, _req$body, orderCreationId, razorpayPaymentId, razorpayOrderId, razorpaySignature, shasum, digest;

  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          crypto = require('crypto'); // getting the details back from our font-end

          _req$body = req.body, orderCreationId = _req$body.orderCreationId, razorpayPaymentId = _req$body.razorpayPaymentId, razorpayOrderId = _req$body.razorpayOrderId, razorpaySignature = _req$body.razorpaySignature; // Creating our own digest
          // The format should be like this:
          // digest = hmac_sha256(orderCreationId + "|" + razorpayPaymentId, secret);

          shasum = crypto.createHmac("sha256", "0wIdYCiuPh7ydfOwhvTKyKEP");
          shasum.update("".concat(orderCreationId, "|").concat(razorpayPaymentId));
          digest = shasum.digest("hex"); // comaparing our digest with the actual signature

          if (!(digest !== razorpaySignature)) {
            _context2.next = 8;
            break;
          }

          return _context2.abrupt("return", res.status(400).json({
            msg: "Transaction not legit!"
          }));

        case 8:
          // THE PAYMENT IS LEGIT & VERIFIED
          // YOU CAN SAVE THE DETAILS IN YOUR DATABASE IF YOU WANT
          res.json({
            msg: "success",
            orderId: razorpayOrderId,
            paymentId: razorpayPaymentId
          });
          _context2.next = 15;
          break;

        case 11:
          _context2.prev = 11;
          _context2.t0 = _context2["catch"](0);
          console.log("error", _context2.t0);
          res.status(500).send(_context2.t0);

        case 15:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 11]]);
}); /// Image upload///

var storage = multer.diskStorage({
  destination: function destination(req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function filename(req, file, cb) {
    cb(null, "".concat(Date.now(), ".jpg"));
  }
});
var upload = multer({
  storage: storage
});
app.post('/uploads', restAuth, upload.single('image'), function (req, res) {
  console.log("req", req);
  res.send("/".concat(req.file.path));
}); /// Image upload///

app.use('/api/users', userRouter);
app.use('/api/products', productRouter);
app.use('/api/orders', orderRouter);
app.get('/', function (req, res) {
  res.send('Server is Ready');
});
app.use(function (err, req, res, next) {
  res.status(500).send({
    message: err.message
  });
});
app.listen(port, function () {
  console.log("server is up at port ".concat(port));
});