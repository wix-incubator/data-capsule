const runStaticHtmlServer = require('./test/run-html-server');

exports.config = {
  framework: 'mocha',
  SELENIUM_PROMISE_MANAGER: false,
  onPrepare() {
    browser.ignoreSynchronization = true;
    return runStaticHtmlServer(3000);
  }
};
