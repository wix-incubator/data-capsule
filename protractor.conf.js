const runStaticHtmlServer = require('./test/run-html-server.ts');

exports.config = {
  framework: 'mocha',
  SELENIUM_PROMISE_MANAGER: false,
  onPrepare() {
    browser.ignoreSynchronization = true;
    return runStaticHtmlServer(3000);
  },
};
