import gulp from "gulp";
import gutil from "gulp-util";
import gulpLoadPlugins from "gulp-load-plugins";
import path from "path";
import through from "through2";

const $ = gulpLoadPlugins()

gulp.task("default", $.sequence("test", "build"));
gulp.task("build", ["build:src", "build:schemas"]);
gulp.task("test", ["test:src", "test:schemas"]);
gulp.task("json", $.sequence("test:schemas", "build:schemas"))

gulp.task("build:src", () => {
  return gulp.src("src/**/*.js")
    .pipe($.babel())
    .pipe(gulp.dest("lib"))
});

gulp.task("build:schemas", () => {
  return gulp.src("schemas/**/*.json")
    .pipe($.jsbeautifier())
    .pipe(gulp.dest("schemas"))
    .pipe(buildSchemasList("schemas-list.json"))
    .pipe(gulp.dest("."))
});

gulp.task("test:src", () => {
  return gulp.src("test/**/*.js")
    .pipe($.mocha())
});

gulp.task("test:schemas", $.sequence("schema:lint", "schema:validate"));

gulp.task("schema:lint", () => {
  return gulp.src("schemas/**/*.json")
    .pipe($.jsonlint())
    .pipe($.jsonlint.failOnError());
});

gulp.task("schema:validate", () => {
  const schemas = {
    "http://json-schema.org/draft-04/schema":
      "vendor/json-schema-draft-04.json",
    "https://raw.githubusercontent.com/io-monad/textlint-registry/master/meta-schema.json":
      "./meta-schema.json",
  };
  return gulp.src("schemas/**/*.json")
    .pipe($.jsonSchema("vendor/json-schema-draft-04.json", { schemas }))
    .pipe($.jsonSchema("./meta-schema.json", { schemas }));
});


function buildSchemasList(listFile) {
  let first, schemas = {};
  return through.obj(
    function (file, enc, done) {
      if (file.isNull() || file.isStream()) return done();
      const schemaName = file.relative.replace(/\.json$/, "");
      const schema = JSON.parse(file.contents);
      const version = schema.title.match(/ v([0-9]+\.[0-9]+\.[0-9]+(?:-\w+)?)/)[1];

      schemas[schemaName] = {
        "name": schemaName,
        "file": file.relative,
        "version": version,
      };

      first = first || schemas[schemaName];
      done();
    },
    function (done) {
      if (!first) return;
      this.push(new gutil.File({
        cwd: first.cwd,
        base: first.base,
        path: path.join(first.base || ".", listFile),
        contents: new Buffer(JSON.stringify(schemas, null, 2))
      }));
      done();
    }
  );
}
