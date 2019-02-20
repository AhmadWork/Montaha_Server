const httpStatus = require('http-status');
const APIError = require('../helpers/APIError');
const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(10);

const User = require('../models/User');

exports.register = (req, res, next) => {
  let errors = [];
  console.log('Register User.', req.body);
  if (!req.body.first_name) {
    errors.push({ error_msg: "لايمكن ترك الاسم الأول خالي!" });
  }
  if (!req.body.last_name) {
    errors.push({ error_msg: "لايمكن ترك الاسم الأخير خالي!" });
  }
  if (!req.body.email || !/[\w]+?@[\w]+?\.[a-z]{2,4}/.test(req.body.email)) {
    errors.push({ error_msg: 'يجب ادخال بريد الكتروني صحيح' });
  }
  if (!req.body.password) {
    errors.push({ error_msg: "!لايمكن ترك كلمة السر خالية" });
  }
  if (req.body.password && req.body.password !== req.body.confirm_password) {
    errors.push({ error_msg: '!' });
  }

  if (errors.length > 0) {
    const err = new APIError(
      errors[0].error_msg,
      httpStatus.UNPROCESSABLE_ENTITY,
      true
    );
    return next(err);
  }
  const newUser = {
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email
  };
  User.findOne({ email: req.body.email })
    .then(user => {
      if (user) {
        throw new Error('Email has already been taken');
      } else {
        newUser.password = bcrypt.hashSync(req.body.password, salt);
        return new User(newUser).save();
      }
    })
    .then(user => {
      return res.json(user);
    })
    .catch(err => {
      const error = new APIError(
        err.message,
        httpStatus.UNPROCESSABLE_ENTITY,
        true
      );
      return next(error);
    });
};
