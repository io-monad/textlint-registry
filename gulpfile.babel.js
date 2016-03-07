import gulp from "gulp";
import gulpLoadPlugins from "gulp-load-plugins";
import {exec} from "child_process";
import path from "path";

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
  return gulp.src("schemas/*.json", { base: path.join(__dirname, "schemas") })
    .pipe($.wrap('  "<%= file.relative.replace(/\\.json$/, "") %>": <%= JSON.stringify(contents) %>'))
    .pipe($.concat("schemas.js", { newLine: ",\n" }))
    .pipe($.wrap([
      "// This is auto-generated file",
      "export default {",
      "<%= contents %>",
      "}"
    ].join("\n")))
    .pipe(gulp.dest("src"))
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
