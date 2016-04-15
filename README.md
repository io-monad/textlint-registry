# textlint-registry

[![wercker status](https://app.wercker.com/status/d16fb621119f038b8d38516d92521e8c/s/master "wercker status")](https://app.wercker.com/project/bykey/d16fb621119f038b8d38516d92521e8c)

Visit [textlint official website](http://textlint.github.io/) for more information.

This is an unofficial repository stores a collection of JSON Schema files representing the configuration definitions of [textlint rules](https://github.com/textlint/textlint/wiki/Collection-of-textlint-rule).

Since the maintener of this repository is too busy to update the definitions frequently, your pull requests are very welcome!

## Writing schema file

### JSON Schema

Most textlint rule has its own configuration to customize the linting behavior. A schema file shows how to write the configuration in machine-friendly way.

Use JSON Schema Draft-04 for writing schema files. See [http://json-schema.org/](http://json-schema.org/) for details.

For actual examples, see [schemas](./schemas) directory.

### Validation and Formatting

There is gulp task to validate and format JSON files is available

```
$ npm install
$ gulp json
```

All JSON files under `schemas` directory will be validated using jsonlint and meta JSON Schema, then formatted by jsbeautifier.

## Using Node module

This package provides Node interface to read schema files.

### registry.getAvailableSchemas()

It returns a Promise object resolves to an array of all names of schemas in `schemas` directory.

```js
let registry = require("textlint-registry");
registry.getAvailableSchemas()
.then(function (schemaNames) {
    console.log(schemaNames);   // ["alex", "general-novel-style-ja", "incremental-headers", ...]
})
.catch(function (err) {
    console.error(err);
});
```

### registry.getSchema(ruleName)

It returns a Promise object resolves to the schema content.

`ruleName` should be a name of rule such as `"alex"`, `"ng-word"`, etc. The prefix for textlint rule (`textlint-rule-`) is unnecessary, but it is stripped out internally.

```js
let registry = require("textlint-registry");
registry.getSchema("general-novel-style-ja")
.then(function (schema) {
    console.log(schema);
})
.catch(function (err) {
    console.error(err);
});
```

### Direct require

You can `require()` any json schema file to load directly. Note that this is synchronous.

```
let alexSchema = require("textlint-registry/schemas/textlint-rule-alex");
// returns an Object of the content of `schemas/textlint-rule-alex.json`
```

## How to build

```
$ npm install
$ gulp build
```

And you will see built files in `lib` directory.

Note that it could update JSON Schema files in `schemas` directory as well as it also runs jsonbeautifier for schema files.

Since building codes uses babel ES6 compiler, `lib` directory MUST NOT be comitted to the repository.

```
$ gulp test
```

It starts mocha to run tests in `test` directory. Also, it validates all schema files against meta-schemas.

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## License

Public domain. See UNLICENSE for details.
