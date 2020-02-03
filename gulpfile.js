global.hostname = "localhost";
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var gulp = require('gulp'),
autoprefixer = require('gulp-autoprefixer'),
minifycss = require('gulp-minify-css'),
rename = require('gulp-rename'),
opn = require('opn');
var bs = require('browser-sync').create();


gulp.task('serve', ['styles'], function() {
    bs.init({
		server: {
			baseDir: "./app"
		},
	});

	gulp.watch('sass/*.sass', ['styles']).on('change', bs.reload);
	gulp.watch('app/*.html', bs.reload);
});

gulp.task('styles', function () {
	return gulp.src('sass/*.sass')
		.pipe(sass({
		includePaths: require('node-bourbon').includePaths
	}).on('error', sass.logError))
	.pipe(sourcemaps.init())
	.pipe(sass())
	.pipe(sourcemaps.write('.'))
	.pipe(gulp.dest('app/styles'))
	.pipe(bs.reload({stream: true}))
});



gulp.task('default', ['serve'], function() {

});
