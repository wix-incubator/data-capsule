const errors = {
  NOT_FOUND: new Error('Key was not found in capsule'),
  SERVER_ERROR: new Error('Failed to perform operarion on server'),
  LOCAL_STORAGE_UNSUPPORTED: new Error('LocalStorage is not supported'),
};

function toError(str) {
  return (
    Object.keys(errors)
      .map(key => errors[key])
      .find(err => err.message === str) || new Error(str)
  );
}

module.exports = {
  PREFIX_SEPARATOR: '|',
  KEY_SEPARATOR: '#',
  STORAGE_PREFIX: 'capsule',
  NOT_FOUND: errors.NOT_FOUND,
  CONNECTION_MAX_TIMEOUT: 2000,
  MESSAGE_MAX_TIMEOUT: 8000,
  SERVER_ERROR: errors.SERVER_ERROR,
  toError,
  LOCAL_STORAGE_UNSUPPORTED: errors.LOCAL_STORAGE_UNSUPPORTED,
};
