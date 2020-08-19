/* global consentPolicyManager, Wix */

import { COOKIE_CONSENT_DISALLOWED } from './utils/constants';

export type ConsentPolicyCategories =
  | 'essential'
  | 'functional'
  | 'analytics'
  | 'advertising';

const CONSENT_POLICY_CATEGORIES = [
  'essential',
  'functional',
  'analytics',
  'advertising',
];

export function verifyConsentPolicy(category: ConsentPolicyCategories) {
  verifyConsentPolicyCategoryIfExists(category);

  const policy = getConsentPolicy();

  if (typeof policy !== 'undefined' && !policy[category]) {
    throw COOKIE_CONSENT_DISALLOWED;
  }
}

export function verifyConsentPolicyCategoryIfExists(
  category: ConsentPolicyCategories | undefined,
) {
  if (!category) {
    return;
  }

  if (CONSENT_POLICY_CATEGORIES.indexOf(category) === -1) {
    const categories = CONSENT_POLICY_CATEGORIES.map((v) => `'${v}'`).join(
      ', ',
    );
    throw new Error(`category must be one of ${categories}`);
  }
}

function getConsentPolicy() {
  const { policy } = resolveByNativeAPI() || resolveByJsSDK() || none();
  return policy;
}

declare const consentPolicyManager: any;
function resolveByNativeAPI() {
  return (
    typeof consentPolicyManager === 'object' &&
    consentPolicyManager.getCurrentConsentPolicy &&
    consentPolicyManager.getCurrentConsentPolicy()
  );
}

declare const Wix: any;
function resolveByJsSDK() {
  return (
    typeof Wix === 'object' &&
    Wix.Utils &&
    Wix.Utils.getCurrentConsentPolicy &&
    Wix.Utils.getCurrentConsentPolicy()
  );
}

function none() {
  return {};
}
