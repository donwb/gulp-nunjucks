var gulp = require('gulp');
var nunjucksRender = require('gulp-nunjucks-render');
var notify = require('gulp-notify');
var browserSync = require('browser-sync');


gulp.task('nunjucks', function() {
	// gets the .html and .nunjucks files
	return gulp.src('pages/**/*.nunjucks')

	// Renders template w/nunjucks
	.pipe(nunjucksRender({
		path: ['templates']
	}))
	.on('error', notify.onError({
		message: "Error: <%= error.message %>",
		title: "Error!",
		sound: "Frog"
	}))
	// output files
	.pipe(gulp.dest('.'))
	.pipe(browserSync.reload({
		stream: true
	}))
 
});

gulp.task('css-watch', function(done){
	browserSync.reload();
	done();
})

gulp.task('bs', function() {
	browserSync({
		server: {
			baseDir: '.'
		},
		browser: 'google chrome'
	})
})

gulp.task('watch', ['bs', 'nunjucks', 'css-watch'], function(){
	gulp.watch('pages/**/*.nunjucks', ['nunjucks']);
	gulp.watch('templates/**/*.nunjucks', ['nunjucks']);
	gulp.watch('css/*.css', ['css-watch']);
});
