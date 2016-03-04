"use strict";

import assert from "power-assert";
import registry from "../src/textlint-registry";

describe("#getAvailableSchemas", () => {
  it("returns an array of schema names", (done) => {
    registry.getAvailableSchemas()
      .then((schemaNames) => {
        assert(schemaNames instanceof Array);
        assert(schemaNames.length > 0);
        assert(typeof schemaNames[0] === "string");
        done();
      })
      .catch(done);
  });

  it("at least contains some rules", () => {
    registry.getAvailableSchemas()
      .then((schemaNames) => {
        assert(schemaNames.indexOf("alex") >= 0);
        assert(schemaNames.indexOf("max-ten") >= 0);
        assert(schemaNames.indexOf("rousseau") >= 0);
      })
  });
});

describe("#getSchema", () => {
  it("returns schema Object", (done) => {
    registry.getSchema("textlint-rule-alex")
      .then((schema) => {
        assert(typeof schema === "object");
        assert(schema["$schema"] === "http://json-schema.org/draft-04/schema#");
        done();
      })
      .catch(done);
  });

  it("rejects promise when schema file is missing", (done) => {
    registry.getSchema("textlint-rule-not-exists")
      .then((schema) => {
        done(new Error("Unexpected!"));
      })
      .catch((err) => {
        assert(err instanceof Error);
        done();
      })
  });
});
