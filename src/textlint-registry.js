'use strict';

import schemas from "./schemas";

const TEXTLINT_RULE_PREFIX = 'textlint-rule-';

function stripRulePrefix(ruleName) {
  if (ruleName.slice(0, TEXTLINT_RULE_PREFIX.length) === TEXTLINT_RULE_PREFIX) {
    return ruleName.slice(TEXTLINT_RULE_PREFIX.length);
  } else {
    return ruleName;
  }
}

function getAvailableSchemas() {
  return Promise.resolve(
    Object.keys(schemas).map((key) => stripRulePrefix(key))
  );
}

function getSchema(ruleName) {
  ruleName = TEXTLINT_RULE_PREFIX + stripRulePrefix(ruleName);
  if (schemas[ruleName]) {
    return Promise.resolve(schemas[ruleName]);
  } else {
    return Promise.reject(new Error(`Unknown schema name: ${ruleName}`));
  }
}

export default {
  getAvailableSchemas: getAvailableSchemas,
  getSchema: getSchema
}
