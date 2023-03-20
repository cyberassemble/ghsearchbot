'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var token = '6091399116:AAG1C5nsTzXGn8OthM--F8VXtu0AhpsGtAo';
var github = {
  version: '3.0.0',
  // optional
  debug: true,
  protocol: 'https',
  host: 'api.github.com',
  pathPrefix: '',
  timeout: 5000,
  headers: {
    'user-agent': 'Mozilla/5.0 (Linux; Android 11; RMX2101) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Mobile Safari/537.36'
  }
};

exports.default = {
  token: token,
  github: github
};
module.exports = exports['default'];
//# sourceMappingURL=config.js.map
