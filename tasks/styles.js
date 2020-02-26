const postcss = require('gulp-postcss');
const gulp = require('gulp');
const newer = require('gulp-newer');
const sourcemaps = require('gulp-sourcemaps');
const sass = require('gulp-sass');
const cssnano = require('cssnano');
const gutil = require('gulp-util');
const browserSync = require('browser-sync').create();

module.exports = () => {
  var plugins = [
    cssnano()
  ];

  return gulp.src([
    'src/scss/*.scss',
    'src/scss/*.css'
  ])
    .pipe(newer('./docs/css'))
    .pipe(sourcemaps.init())
    .pipe(sass())
    .on('error', gutil.log)
    .pipe(postcss(plugins))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./docs/css'))
    .pipe(browserSync.stream());
  };
