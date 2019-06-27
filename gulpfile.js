const gulp = require('gulp'),
nodemon = require('gulp-nodemon'),
sass = require('gulp-sass'),
browserSync = require('browser-sync'),
postcss = require('gulp-postcss'),
autoprefixer = require('autoprefixer');


const paths = {
    styles: {
        src: './scss/**/*.scss',
        dest: './public/styles/styles.css'
    },
    scripts: {
        src: './app/assets/scripts/**/*.js',
        dest: './app/temp/scripts/'
    }
};


function nodemonTask(cb) {
    let started = false;

    return nodemon({
        script: "serve.js"
    }).on("start", () => {
        if (!started) {
            cb();
            started = true;
        }
    });
}


// Styles
function styles(done) {
    console.log('Starting styles task');
    return gulp.src(paths.styles.src)
        .pipe(sass().on('error', sass.logError))
        .pipe(postcss([autoprefixer]))
        .pipe(gulp.dest(paths.styles.dest))
        .pipe(browserSync.stream());
        done();
}

exports.styles = styles;


// Scripts


// Images


// Watch
function watch() {
    browserSync.init(
        // notify: false,
        null, 
        {
            proxy: 'http://localhost:7000',
            files: ['public/**/*.*'],
            port: 9000
        }
    );

    gulp.watch(paths.styles.src, styles);
    gulp.watch('./views/**/*.ejs').on('change', browserSync.reload);
}

// Build


// Exports
exports.watch = watch;

