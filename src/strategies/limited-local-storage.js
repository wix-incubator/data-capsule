const {clean, isExpired} = require('../utils/local-storage-cleaner');
const LocalStorageStrategy = require('./local-storage');

const FIVE_MINUTES = 60 * 5;

class LimitedLocalStorageStrategy extends LocalStorageStrategy {

  constructor(args = {}) {
    super();

    this.expiration = args.expiration || FIVE_MINUTES;
    this.maxAge = args.maxAge || FIVE_MINUTES;
    this.maxItems = args.maxItems || 100;
    this.timeout = args.timeout || 100;
  }

  setItem(key, value, options) {
    const {expiration} = this;
    return this._cleanup(super.setItem(key, value, Object.assign({expiration}, options)));
  }

  _cleanup(promise) {
    clearTimeout(this.scheduledCleaner);
    this.scheduledCleaner = setTimeout(() => {
      const now = Date.now();
      clean((record, remaining) => {
        if (isExpired(record) || (record.createdAt + (this.maxAge * 1000) < now) || (remaining > this.maxItems)) {
          return true;
        }
        return false;
      });
    }, this.timeout);
    return promise;
  }

}

module.exports = LimitedLocalStorageStrategy;
