const gulp = require("gulp");
const zip = require("gulp-zip");
const run = require("gulp-run");
const mocha = require("gulp-mocha");

var paths = {
    mainext: "build/Release/hello.node",
    test: "test/js/**/*.js",
    dist: "dist/**/*"
};

gulp.task("compile-ext", () => {
    return run("node-gyp configure build").exec()
        .pipe(gulp.dest("output"));
});

gulp.task("move-ext", ["compile-ext"], () => {
    return gulp.src(paths.mainext)
        .pipe(gulp.dest("dist"));
});

gulp.task("compress", ["move-ext"], () =>
    gulp.src(paths.dist)
    .pipe(zip("dist.zip"))
    .pipe(gulp.dest("./"))
);

gulp.task("test", ["move-ext"], () => {
    return gulp.src(paths.test)
        .pipe(mocha({
            reporter: "spec"
        }));
});

gulp.task("default", ["compile-ext", "move-ext", "compress"]);
