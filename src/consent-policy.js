const CONSENT_POLICY_CATEGORIES = [
  'essential',
  'functional',
  'analytics',
  'advertising',
];

export function verifyConsentPolicy(category) {
  const consentPolicy = getConsentPolicy();

  if (consentPolicy.indexOf(category) === -1) {
    throw new Error(`${category} category way not pemritted by the user`);
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
  return resolveByNativeAPI() || resolveByJsSDK() || none();
}

function resolveByNativeAPI() {
  return (
    global.consentPolicyManager &&
    global.consentPolicyManager.getCurrentConsentPolicy()
  );
}

function resolveByJsSDK() {
  return global.Wix && global.Wix.Utils.getCurrentConsentPolicy();
}

function none() {
  return [];
}
