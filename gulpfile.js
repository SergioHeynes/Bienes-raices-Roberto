const gulp = require('gulp'),
sass = require('gulp-sass'),
browserSync = require('browser-sync'),
nodemon = require('gulp-nodemon'),
postcss = require('gulp-postcss'),
autoprefixer = require('autoprefixer');


const paths = {
    styles: {
        src: 'scss/**/*.scss',
        dest: './public/styles/'
    },
    scripts: {
        src: './app/assets/scripts/**/*.js',
        dest: './app/temp/scripts/'
    }
};



function styles(done) {
    console.log('Starting styles task');
    return gulp.src(paths.styles.src)
        .pipe(sass().on('error', sass.logError))
        .pipe(postcss([autoprefixer]))
        .pipe(gulp.dest(paths.styles.dest))
        .pipe(browserSync.stream());
        done();
}


function watch() {
    gulp.watch(paths.styles.src, styles);
    gulp.watch('./views/**/*.ejs').on('change', browserSync.reload);
}


gulp.task("nodemon", cb => {
  let started = false;

  return nodemon({
    script: "app.js"
  }).on("start", () => {
    if (!started) {
      cb();
      started = true;
    }
  });
});

gulp.task(
  "browser-sync",
  gulp.series("nodemon", () => {
    browserSync.init(null, {
      proxy: "http://localhost:3000",
      files: ["public/**/*.*"],

      port: 9000
    });
  })
);

gulp.task("serve", 
    gulp.parallel(gulp.series("browser-sync", () => {}), watch));

