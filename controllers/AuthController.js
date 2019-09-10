const jwt = require('jsonwebtoken');
const httpStatus = require('http-status');
const APIError = require('../helpers/APIError');
const bcrypt = require('bcryptjs');
var passport = require('passport');
var settings = require('../config/settings');
const config = require('../config/index');
const User = require('../models/User');

exports.rigster= function(req, res) {
  if (!req.body.username || !req.body.password) {
    res.json({success: false, msg: 'الرجاء ادخال جميع الخانات'});
  } else {
    var newUser = new User({
      email: req.body.email,
      password: req.body.password,
      first_name:req.body.firstName,
      last_name:req.body.lastName
    });
    // save the user
    newUser.save(function(err) {
      if (err) {
        return res.json({success: false, msg: '.البريد الالكتروني مسجل'});
      }
      res.json({success: true, msg: 'مرحباً بك معنا'});
    });
  }
};

exports.login =  function(req, res) {
  User.findOne({
    email: req.body.email
  }, function(err, user) {
    if (err) throw err;

    if (!user) {
      res.status(401).send({success: false, msg: 'Authentication failed. User not found.'});
    } else {
      // check if password matches
      user.comparePassword(req.body.password, function (err, isMatch) {
        if (isMatch && !err) {
          // if user is found and password is right create a token
          var token = jwt.sign(user.toJSON(), settings.secret);
          // return the information including token as JSON
          res.json({success: true, token: 'JWT ' + token,email:user.email,isManger:user.isManger});
        } else {
          res.status(401).send({success: false, msg: 'Authentication failed. Wrong password.'});
        }
      });
    }
  });
};

exports.logout = (req, res) => {
  req.logout();
};
