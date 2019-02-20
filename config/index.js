const expressJwt = require('express-jwt');
const jwksRsa = require("jwks-rsa");

process.env.NODE_ENV = 'production';
/*
 Auth0 auth middleware for express-jwt
*/
const jwtCheck = expressJwt({
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: 'https://montaha.eu.auth0.com/.well-known/jwks.json'
  }),
  audience: 'https://montaha.eu.auth0.com/api/v2/',
  issuer: 'https://montaha.eu.auth0.com',
  algorithms: ['RS256']
});

const config = {
  env: process.env.NODE_ENV,
  port: process.env.PORT || 5000,
  jwtExpiresIn: 86400,
  jwtMiddleware: jwtCheck,
  jwtSecret:'sdfdasdcfdsw'
};

if (process.env.NODE_ENV === 'production') {
  console.log('production');
  config.mongoUri = 'mongodb://admin:A7med2008@ds143542.mlab.com:43542/montaha-test';
  
} else {
  console.log('DEV');
  config.mongoUri = 'mongodb://admin:A7med2008@ds143542.mlab.com:43542/montaha-test';
}
module.exports = config;
