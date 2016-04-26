var gulp = require('gulp');
var $    = require('gulp-load-plugins')();

var sassPaths = [
  'bower_components/foundation-sites/scss',
  'bower_components/fontawesome/scss',
];

gulp.task('sass', function () {
  return gulp.src('scss/foundation-font-awesome-buttons-styles.scss')
    .pipe($.sass({
      includePaths: sassPaths,
    })
    .on('error', $.sass.logError))
    .pipe($.autoprefixer({
      browsers: ['last 2 versions', 'ie >= 9'],
    }))
    .pipe(gulp.dest('css'));
});

gulp.task('default', ['sass'], function () {
  gulp.watch(['scss/*.scss'], ['sass']);
});
