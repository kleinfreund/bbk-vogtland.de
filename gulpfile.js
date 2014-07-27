// Include gulp
var gulp      = require('gulp');

// Include plugins
var sass      = require('gulp-sass');
var prefix    = require('gulp-autoprefixer');
var minifycss = require('gulp-minify-css');
var rename    = require('gulp-rename');



// Process Sass (compile, prefix, minify)
gulp.task('sass', function() {
    return gulp.src('sass/**/*.scss')
        // Process Sass files
        .pipe(sass({
            // sourceMap: 'sass',
            // sourceComments: 'map',
            errLogToConsole: true
        }))

        // Prefix CSS properties
        .pipe(prefix('last 2 version', '> 1%', 'ie 9', 'ie 8'))

        // Output regular `*.css`
        .pipe(gulp.dest('css'))

        // Minify CSS
        .pipe(minifycss())

        // Append `.min` to filename
        .pipe(rename({ suffix: '.min' }))

        // Output minified `*.min.css`
        .pipe(gulp.dest('css'));
});



gulp.task('watch', function() {
    gulp.watch('sass/**/*.scss', ['sass'])
});



// Default task is simply called with `gulp`, 'sass-watch'
gulp.task('default', ['sass', 'watch']);
