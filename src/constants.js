const errors = {
  NOT_FOUND: new Error('Key was not found in capsule')
};

function toError(str) {
  return Object.values(errors).find(err => err.message === str) || str;
}

module.exports = {
  PREFIX_SEPARATOR: '|',
  KEY_SEPARATOR: '#',
  STORAGE_PREFIX: 'capsule',
  NOT_FOUND: errors.NOT_FOUND,
  toError
};
