module.exports = function () {
	$.gulp.task('sass', function () {
		return $.gulp.src('src/static/sass/*.{sass,css}')
			.pipe($.gp.sourcemaps.init())
			.pipe($.gp.sass({
				'include css': true,
				includePaths: require('node-normalize-scss').includePaths

			}))
			.pipe($.gp.autoprefixer({
				browsers: ['last 10 versions']
			}))
			.on("error", $.gp.notify.onError({
				title: "style"
			}))
			.pipe($.gp.csso())
			.pipe($.gp.sourcemaps.write())
			.pipe($.gulp.dest(`${$.buildDir}/static/css/`))
			.pipe($.bs.reload({
				stream: true
			}));
	});
}
