var gulp = require('gulp')
var concat = require('gulp-concat')
var uglify = require('gulp-uglify')
var minify = require('gulp-minify-css')
var rename = require('gulp-rename')
var sass = require('gulp-sass')
var watch = require('gulp-watch')

gulp.task('minify-js', function () {
	gulp.src('src/*.js')
	.pipe(concat('app.js'))
	.pipe(gulp.dest('dist/'))
});

gulp.task('minify-css', function () {
	gulp.src('src/*.scss')
	.pipe(sass().on('error',sass.logError))
	.pipe(concat('style.css'))
	.pipe(minify())
	.pipe(gulp.dest('dist/'))
})

gulp.task('watch', function () {
	gulp.watch('src/*.scss', ['minify-css'])
	gulp.watch('src/*.js', ['minify-js'])
})

gulp.task('icons', function () {
	gulp.src('src/icons/*')
	.pipe(gulp.dest('dist/icons/'))
})

gulp.task('default',['watch','minify-js', 'minify-css', 'icons'])