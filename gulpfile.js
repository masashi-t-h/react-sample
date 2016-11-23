const gulp = require('gulp');
const webpack = require('gulp-webpack');
const config = require('./webpack.config');
const htmlmin = require('gulp-htmlmin');
const rimraf = require('rimraf');

gulp.task('clean_dist', function (clean_build) {
  rimraf('./dist', clean_build);
});

gulp.task('minify-html', ['clean_dist'], function () {
  return gulp.src('./src/index.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('./dist'));
});

gulp.task('build', ['minify-html'], function () {
  return gulp.src('')
    .pipe(webpack(config))
    .pipe(gulp.dest(''));
});