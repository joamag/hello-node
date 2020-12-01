const gulp = require("gulp");
const zip = require("gulp-zip");
const run = require("gulp-run");
const size = require("gulp-size");
const count = require("gulp-count");
const mocha = require("gulp-mocha");
const uglifyes = require("gulp-uglifyes");
const replace = require("gulp-replace");
const _package = require("./package.json");

var paths = {
    mainext: "build/Release/hello.node",
    scripts: "lib/**/*.js",
    test: "test/js/**/*.js",
    dist: "dist/**/*"
};

gulp.task("build-js", () => {
    return gulp.src(paths.scripts)
        .pipe(uglifyes({
            mangle: false,
            ecma: 6
        }))
        .pipe(replace("__VERSION__", _package.version))
        .pipe(replace("../build/Release/hello.node", "./hello.node"))
        .pipe(size())
        .pipe(size({
            gzip: true
        }))
        .pipe(gulp.dest("dist"))
        .pipe(count("## js files copied"));
});

gulp.task("compile-ext", () => {
    return run("node-gyp configure build").exec()
        .pipe(gulp.dest("output"));
});

gulp.task("move-ext",
    gulp.series("compile-ext", () => {
        return gulp.src(paths.mainext)
            .pipe(gulp.dest("dist"));
    })
);

gulp.task("compress",
    gulp.series("move-ext", () => {
        return gulp.src(paths.dist)
            .pipe(zip("dist.zip"))
            .pipe(gulp.dest("build"));
    })
);

gulp.task("mark", () => {
    return gulp.src(paths.scripts)
        .pipe(replace("__VERSION__", _package.version))
        .pipe(gulp.dest("lib"));
});

gulp.task("test", () => {
    return gulp.src(paths.test)
        .pipe(mocha({
            reporter: "spec"
        }));
});

gulp.task("default", gulp.series("build-js", "compile-ext", "move-ext", "compress"));
