module.exports = function () {
        $.gulp.task('img:dev', function () {
                return $.gulp.src('src/static/img/*.{png,jpg,gif,svg}')
                        .pipe($.gulp.dest('build/static/img/'));
        });

        $.gulp.task('img:build', function () {
                return $.gulp.src('src/static/img/*.{png,jpeg,gif,svg}')
                        .pipe($.gulp.dest('build/static/img/'));
        });
}
