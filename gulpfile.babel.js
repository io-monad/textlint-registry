import gulp from "gulp";
import gutil from "gulp-util";
import gulpLoadPlugins from "gulp-load-plugins";
import {exec} from "child_process";
import path from "path";
import through from "through2";

const $ = gulpLoadPlugins()

gulp.task("default", ["build"]);
gulp.task("json", $.sequence("lint", "validate", "format"));
gulp.task("build", ["build:src", "build:schemas"]);

gulp.task("build:src", ["build:schemas"], () => {
  return gulp.src("src/**/*.js")
    .pipe($.babel())
    .pipe(gulp.dest("lib"))
});

gulp.task("build:schemas", () => {
  return gulp.src("schemas/**/*.json")
    .pipe(buildSchemasList("schemas-list.json"))
    .pipe(gulp.dest("."))
});

gulp.task("test", () => {
  return gulp.src("test/**/*.js")
    .pipe($.mocha())
});

gulp.task("lint", () => {
  return gulp.src("schemas/**/*.json")
    .pipe($.jsonlint())
    .pipe($.jsonlint.failOnError());
});

gulp.task("validate", (cb) => {
  exec(
    "node_modules/.bin/z-schema vendor/json-schema-draft-04.json schemas/*.json",
    (err, stdout, stderr) => {
      if (err) {
        console.log(stdout);
        console.log(stderr);
      }
      cb(err);
    }
  )
});

gulp.task("format", () => {
  return gulp.src("schemas/**/*.json")
    .pipe($.jsbeautifier())
    .pipe(gulp.dest("schemas"))
});

function buildSchemasList(listFile) {
  let first, schemas = {};
  return through.obj(
    function (file, enc, done) {
      if (file.isNull() || file.isStream()) return done();
      const schemaName = file.relative.replace(/\.json$/, "");
      schemas[schemaName] = {
        "name": schemaName,
        "file": file.relative,
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
