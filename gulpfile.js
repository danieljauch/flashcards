const gulp = require('gulp');
// CSS
const compass = require('gulp-compass');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
// JS
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
// General
const plumber = require('gulp-plumber');
const watch = require('gulp-watch');
const util = require('gulp-util');

gulp.task('css', () => {
  gulp.src('scss/**/*.scss')
    .pipe(compass({
      sass: 'scss',
      css: 'css'
    }))
    .pipe(autoprefixer({
      browsers: ['last 5 versions', 'ie >= 11', '> 5%'],
      cascade: false,
      grid: true
    }))
    .pipe(plumber())
    .pipe(cleanCSS())
    .pipe(gulp.dest('css'));
});
gulp.task('js', () => {
  gulp.src('js/dev/*.js')
    .pipe(concat('../app.js'))
    .pipe(babel({
      presets: ['es2015', 'es2017', 'react']
    }))
    .pipe(uglify().on('error', err => {
      util.log(util.colors.red('[Error]'), err.toString());
    }))
    .pipe(plumber())
    .pipe(gulp.dest('js/prod/'));
});
gulp.task('watch', () => {
  gulp.watch('scss/**/*.scss', ['css']);
  gulp.watch('js/dev/*.js', ['js']);
});
gulp.task('default', ['watch']);
