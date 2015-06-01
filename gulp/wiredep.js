'use strict';

var gulp = require('gulp');

var $ = require('gulp-load-plugins')();

// inject bower components
gulp.task('wiredep', function () {
   var wiredep = require('wiredep').stream;

   gulp.src('app/scripts/**/*.js')
     .pipe(wiredep({
         directory: 'app/bower_components'
     }))
     .pipe(gulp.dest('app/scripts'));

   gulp.src('app/*.html')
     .pipe(wiredep({
       directory: 'app/bower_components',
       exclude: ['bootstrap-sass-official']
     }))
     .pipe(gulp.dest('app'));
});
