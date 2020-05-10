/* global consentPolicyManager, Wix */

import { COOKIE_CONSENT_DISALLOWED } from './utils/constants';

const CONSENT_POLICY_CATEGORIES = [
  'essential',
  'functional',
  'analytics',
  'advertising',
];

export function verifyConsentPolicy(category) {
  const consentPolicy = getConsentPolicy();

  if (consentPolicy.indexOf(category) === -1) {
    throw COOKIE_CONSENT_DISALLOWED;
  }
}

export function verifyConsentPolicyCategoryIfExists(category) {
  if (!category) return;

  if (CONSENT_POLICY_CATEGORIES.indexOf(category) === -1) {
    const categories = CONSENT_POLICY_CATEGORIES.map(v => `'${v}'`).join(', ');
    throw new Error(`category must be one of ${categories}`);
  }
}

function getConsentPolicy() {
  const categories = resolveByNativeAPI() || resolveByJsSDK() || none();

  return [...categories, 'essential'];
}

function resolveByNativeAPI() {
  return (
    typeof consentPolicyManager === 'object' &&
    consentPolicyManager.getCurrentConsentPolicy &&
    consentPolicyManager.getCurrentConsentPolicy()
  );
}

function resolveByJsSDK() {
  return (
    typeof Wix === 'object' &&
    Wix.Utils &&
    Wix.Utils.getCurrentConsentPolicy &&
    Wix.Utils.getCurrentConsentPolicy()
  );
}

function none() {
  return [];
}
