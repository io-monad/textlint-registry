'use strict';

import schemasList from "../schemas-list.json";
import path from "path";

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
    Object.keys(schemasList).map((key) => stripRulePrefix(key))
  );
}

function getSchema(ruleName) {
  ruleName = TEXTLINT_RULE_PREFIX + stripRulePrefix(ruleName);
  if (schemasList[ruleName]) {
    const schemaJson = path.join(__dirname, "..", "schemas", schemasList[ruleName].file || {});
    return Promise.resolve(require(schemaJson));
  } else {
    return Promise.reject(new Error(`Unknown schema name: ${ruleName}`));
  }
}

export default {
  getAvailableSchemas: getAvailableSchemas,
  getSchema: getSchema
}
