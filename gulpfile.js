var gulp = require('gulp');
var webpack = require('gulp-webpack');
var webpack_config = require('./webpack.config');
var htmlmin = require('gulp-htmlmin');

gulp.task('cleanBuild', function (clean_build) {
  var rimraf = require('rimraf');
  rimraf('./build', clean_build);
});

gulp.task('copyHtml', function () {
  return gulp.src('./src/index.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('./dist'));
});

gulp.task('build', ['cleanBuild', 'copyHtml'], function (copy_index) {
  return gulp.src('')
    .pipe(webpack(webpack_config))
    .pipe(gulp.dest(''));
});