const errors = {
  NOT_FOUND: new Error('Key was not found in capsule'),
  SERVER_ERROR: new Error('Failed to perform operarion on server'),
  LOCAL_STORAGE_UNSUPPORTED: new Error('LocalStorage is not supported'),
};

export function toError(str) {
  return (
    Object.keys(errors)
      .map(key => errors[key])
      .find(err => err.message === str) || new Error(str)
  );
}

export const PREFIX_SEPARATOR = '|';
export const KEY_SEPARATOR = '#';
export const STORAGE_PREFIX = 'capsule';
export const NOT_FOUND = errors.NOT_FOUND;
export const CONNECTION_MAX_TIMEOUT = 2000;
export const MESSAGE_MAX_TIMEOUT = 8000;
export const SERVER_ERROR = errors.SERVER_ERROR;
export const LOCAL_STORAGE_UNSUPPORTED = errors.LOCAL_STORAGE_UNSUPPORTED;
