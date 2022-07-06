var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var $ = require('gulp-load-plugins')();
var sass = require('gulp-sass')(require('sass'));

var sassPaths = [
  'node_modules/foundation-sites/scss',
  'node_modules/@fortawesome/fontawesome-free/scss',
  'node_modules/@sass-collective',
  'src',
];

var sassTask = function () {
  return gulp
    .src(['preview/*.scss', 'src/*.scss'])
    .pipe(
      sass({
        includePaths: sassPaths,
      }).on('error', sass.logError)
    )
    .pipe($.autoprefixer())
    .pipe(gulp.dest('css'))
    .pipe(browserSync.stream());
};

gulp.task('sass', sassTask);

gulp.task('watch', function () {
  browserSync.init({
    server: { baseDir: './' },
  });
  gulp.watch('**/*.scss', sassTask);
  gulp.watch('**/*.html').on('change', browserSync.reload);
});

var serveTask = gulp.series('sass', 'watch');

gulp.task('serve', serveTask);

gulp.task('default', serveTask);
