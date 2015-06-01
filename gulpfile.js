'use strict';

var gulp = require('gulp');
var bower = require('gulp-bower');

require('require-dir')('./gulp');

gulp.task('default', ['clean'], function () {
    gulp.start('build');
});
// gulp.task('bower', function() {
//     return bower().pipe(gulp.dest('lib/'));
// });