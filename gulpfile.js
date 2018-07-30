var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var $    = require('gulp-load-plugins')();

var sassPaths = [
  'node_modules/foundation-sites/scss',
  'node_modules/@fortawesome/fontawesome-free/scss',
  'src'
];

gulp.task('sass', function () {
  return gulp.src(['preview/*.scss', 'src/*.scss'])
    .pipe($.sass({
      includePaths: sassPaths
    })
    .on('error', $.sass.logError))
    .pipe($.autoprefixer({
      browsers: ['last 2 versions', 'ie >= 9']
    }))
    .pipe(gulp.dest('css'))
    .pipe(browserSync.stream());
});

gulp.task('serve', ['sass'], function() {
  browserSync.init({
    server: { baseDir: "./" }
  });

  gulp.watch('**/*.scss', ['sass']);
  gulp.watch("**/*.html").on('change', browserSync.reload);
});


gulp.task('default', ['sass', 'serve'], function () { });
