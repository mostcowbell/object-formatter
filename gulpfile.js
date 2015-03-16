var gulp = require('gulp'),
  header = require('gulp-header'),
  footer = require('gulp-footer'),
  concat = require('gulp-concat'),
  mocha = require('gulp-mocha');

gulp.task('default', ['build','test']);
gulp.task('build', ['build:obj-format', 'build:elvis']);

gulp.task('build:obj-format', function() {
  gulp.src([
      'src/formatter.js',
      'src/format.js',
      'src/populate.js',
      'src/elvis.js',
    ])
    .pipe(concat('obj-format.js'))
    .pipe(header('\n\'use strict\'\n'))
    .pipe(footer('module.exports = Formatter;'))
    .pipe(gulp.dest('build'));
});

gulp.task('build:elvis', function(){
  gulp.src('src/elvis.js')
    .pipe(footer('module.exports = getField;'))
    .pipe(gulp.dest('build'));
});

gulp.task('test', function() {
  gulp.src('test/*.js', {
      read: false
    })
    .pipe(mocha({
      reporter: 'nyan'
    }));
});
