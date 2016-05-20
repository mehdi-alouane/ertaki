'use strict'

// Include Gulp & tools
var gulp         = require('gulp');
var browserSync  = require('browser-sync').create();
var sass         = require('gulp-sass');
var jade         = require('gulp-jade');
var uglify       = require('gulp-uglify');
var cleanCSS     = require('gulp-clean-css');
var autoprefixer = require('gulp-autoprefixer');
var rename       = require('gulp-rename');
var concat       = require('gulp-concat');
var del          = require('del');
var runSequence  = require('run-sequence');
var pngquant     = require('imagemin-pngquant');
var imagemin     = require('gulp-imagemin');
var reload       = browserSync.reload;



// Jade task
gulp.task('jade', function() {
	return gulp.src('./app/index.jade')
		.pipe(jade())
		.pipe(gulp.dest('./build'));
});

// Sass task
gulp.task('sass', function() {
	return gulp.src('./app/styles/*.sass')
		.pipe(sass())
		.pipe(autoprefixer())
		.pipe(rename({suffix: '.min'}))
		.pipe(cleanCSS())
		.pipe(gulp.dest('./build/styles'));
});

// Lint JavaScript
/*
gulp.task('js', function(){
  return gulp.src(
    ['./app/js/jquery-1.11.0.js',
    './app/js/jquery.ajaxchimp.js',
    './app/js/jquery.ajaxchimp.langs.js',
    './app/js/script.js'])
    .pipe(concat('app.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./build/js'))
    .pipe(jshint.reporter('default'));
});
*/


// Images Minify task
gulp.task('images', function () {
  return gulp.src('./app/images/**')
    .pipe(imagemin({
        progressive: true,
        svgoPlugins: [{removeViewBox: false}],
        use: [pngquant()]
    }))
    .pipe(gulp.dest('./build/images'));
});


// Watch Files & Reload
gulp.task('serve', function() {
  browserSync.init({
    server: {
      baseDir: "./build"
    }
  });

  gulp.watch(['./app/index.jade'], ['jade', reload]);
  gulp.watch('./app/styles/**/*.sass', ['sass', reload]);
});

// Clean the Build Output Directory
gulp.task('clean', function() {
  del(['build/*']);
});

// Build
gulp.task('build', ['clean'], function() {
  runSequence('jade', 'sass', 'images');
});


// Gulp Default
gulp.task('default', ['clean'], function() {
  gulp.start('build');
});
