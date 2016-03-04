'use strict';

import fs from 'fs';
import path from 'path';

const TEXTLINT_RULE_PREFIX = 'textlint-rule-';
const SCHEMA_DIR = path.join(__dirname, '..', 'schemas');

function stripRulePrefix(ruleName) {
  if (ruleName.slice(0, TEXTLINT_RULE_PREFIX.length) === TEXTLINT_RULE_PREFIX) {
    return ruleName.slice(TEXTLINT_RULE_PREFIX.length);
  } else {
    return ruleName;
  }
}

function getAvailableSchemas() {
  return new Promise((resolve, reject) => {
    fs.readdir(SCHEMA_DIR, (err, files) => {
      if (err) return reject(err);
      resolve(files.map((file) => stripRulePrefix(file).replace(/\.json$/, "")));
    });
  });
}

function getSchema(ruleName) {
  ruleName = TEXTLINT_RULE_PREFIX + stripRulePrefix(ruleName);
  return new Promise((resolve, reject) => {
    fs.readFile(path.join(SCHEMA_DIR, `${ruleName}.json`), "utf-8", (err, content) => {
      if (err) return reject(err);
      try {
        resolve(JSON.parse(content));
      } catch (e) {
        reject(e);
      }
    });
  });
}

export default {
  getAvailableSchemas: getAvailableSchemas,
  getSchema: getSchema
}
