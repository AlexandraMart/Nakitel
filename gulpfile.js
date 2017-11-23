var gulp = require('gulp'),
	sass = require('gulp-sass'),
	browserSync = require('browser-sync');

/*gulp.task('sass', function(){
	return gulp.src('styles/main.scss')
	.pipe(sass())
	.pipe(gulp.dest('styles'))
	.pipe(browserSync.reload({
		stream: true
	}));
});*/


gulp.task('sass', function() {
    return gulp.src('styles/main.scss')
        .pipe(sass())
        .pipe(gulp.dest('styles'))
        .pipe(browserSync.stream());
});

gulp.task('browser-sync', function(){
	browserSync.init({
		server: {
			baseDir: ''
		},
		notify: false
	})
});
gulp.task('watch', ['browser-sync', 'sass'], function(){
	gulp.watch('styles/**/*.scss', ['sass']);
	//gulp.watch('*.html', browserSync.reload);

	
	//gulp.watch('js/**/*.js', browserSync.reload);
	 gulp.watch('*.html').on('change', browserSync.reload);
});
