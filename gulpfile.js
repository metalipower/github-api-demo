var gulp = require('gulp');
var bs = require('browser-sync').create(); // create a browser sync instance.
var concat = require('gulp-concat');
var lint = require('gulp-eslint');
var sass = require('gulp-sass');
var htmlmin = require('gulp-htmlmin');
var cleanCSS = require('gulp-clean-css');
var uglify = require('gulp-uglify');
var karma = require('gulp-karma');

var config = {
    paths: {
        eslint: './src/js/**',
        lib: './src/lib/**/*.js',
        distLib: './www/lib',
        js: './src/js/**/*.js',
        scss: './src/scss/**/*.scss',
        index: './src/index.html',
        views: './src/views/**/*.html',
        componentsHtml: './src/components-html/**/*.html',
        images: './src/img/**/*.*',
        distViews: './www/views',
        distcomponentsHtml: './www/components-html',
        distImg: './www/dist/img',
        distCss: './www/dist/css',
        distJs: './www/dist/js',
        dist: "./www"
    }
}

gulp.task('lint', function(){
    return gulp.src(config.paths.eslint)
        .pipe(lint({
            "rules": {
                "quotes": [1, "single"],
                "semi": [1, "always"],
                "eqeqeq": [1, "always"],
                "no-trailing-spaces": 0,
                "eol-last": 0,
                "no-unused-vars": 0,
                "no-underscore-dangle": 0,
                "no-alert": 0,
                "no-lone-blocks": 0,
                "no-console": ["warn", { allow: ["warn", "error"] }]
            }
        }))
        .pipe(lint.format())
        .pipe(lint.failOnError())
        .pipe(bs.stream());
});

gulp.task('tests', function() {
    return gulp.src("./fake-dir")
        .pipe(karma({
            configFile: 'karma.conf.js',
            action: 'run'
        }))
        .on('error', function(err) {
            console.log(err);
            this.emit('end');
        });
});

gulp.task('js', function(){
    /* Copy lib folder */
    gulp.src(config.paths.lib)
        .pipe(gulp.dest(config.paths.distLib));
    return gulp.src(config.paths.js )
        .pipe(concat('dist.js'))
        .pipe(uglify({mangle: false}))
        .pipe(gulp.dest(config.paths.distJs))
        .pipe(bs.stream());
});

gulp.task('copy-html', function(){
    gulp.src(config.paths.views)
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest(config.paths.distViews));

    gulp.src(config.paths.componentsHtml)
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest(config.paths.distcomponentsHtml));

    return gulp.src(config.paths.index )
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest(config.paths.dist))
        .pipe(bs.stream());

});

gulp.task('copy-images', function(){
    return gulp.src(config.paths.images )
        .pipe(gulp.dest(config.paths.distImg))
        .pipe(bs.stream());

});

gulp.task('sass', function () {
    return gulp.src(config.paths.scss)
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(config.paths.distCss))
        .pipe(cleanCSS())
        .pipe(gulp.dest(config.paths.distCss))
        .pipe(bs.stream());
});

gulp.task('browser-sync', function() {
    bs.init({
        server: {
            baseDir: "./www"
        }
    });
    gulp.watch("src/js/**/*.js", ['lint', 'js']);
    gulp.watch(['src/js/**/*.js'], ['tests']);
    gulp.watch("src/scss/**/*.scss", ['sass']);
    gulp.watch("src/img/**/*.", ['copy-images']);
    gulp.watch(["src/*.html", "src/views/**/*.html", "src/components-html/**/*.html"], ['copy-html']);
    gulp.watch("src/views/*.html").on('change', bs.reload);
});

gulp.task('default',['lint', 'js', 'tests', 'sass', 'copy-html', 'copy-images', 'browser-sync']);