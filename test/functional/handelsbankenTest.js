var tests = require('./shared/aktiaHandelsbankenTest');

var options = {
  bankName: 'Handelsbanken',
  username: '11111111',
  password: '123456',
  securityCode: '123456'
};

tests.testPayment(casper, options);
tests.testCancel(casper, options);