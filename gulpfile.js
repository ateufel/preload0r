var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
	pkg = require('./package.json'),
	header = require('gulp-header');

var banner = ['/**',
  ' * <%= pkg.name %> - <%= pkg.description %>',
  ' * @version v<%= pkg.version %>',
  ' * @link <%= pkg.homepage %>',
  ' * @license <%= pkg.license %>',
  ' */',
  ''].join('\n');

gulp.task('compress', function() {
	return gulp.src('src/*.js')
		.pipe(uglify())
		.pipe(header(banner, {pkg: pkg}))
		.pipe(gulp.dest('build'))
});
gulp.task('default', function () {
    gulp.start('compress');
});