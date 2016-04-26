var gulp = require('gulp');
var $    = require('gulp-load-plugins')();

var sassPaths = [
  'bower_components/foundation-sites/scss',
  'bower_components/fontawesome/scss',
  'src',
];

gulp.task('sass', function () {
  return gulp.src(['preview/*.scss', 'src/*.scss'])
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
  gulp.watch(['preview/*.scss'], ['sass']);
  gulp.watch(['src/*.scss'], ['sass']);
});
