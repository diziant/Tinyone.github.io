module.exports = function () {
	$.gulp.task('pug', function () {
		return $.gulp.src('src/pug/*.pug')
			.pipe($.gp.pug({
				pretty: true
			}))
			.pipe($.gulp.dest($.buildDir))
			.on('end', $.bs.reload);
	});
}
