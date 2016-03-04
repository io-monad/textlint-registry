import gulp from "gulp";
import gulpLoadPlugins from "gulp-load-plugins";
import {exec} from "child_process";

const $ = gulpLoadPlugins()

gulp.task("default", ["build"]);
gulp.task("json", $.sequence("lint", "validate", "format"));

gulp.task("build", () => {
  return gulp.src("src/**/*.js")
    .pipe($.babel())
    .pipe(gulp.dest("lib"))
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
