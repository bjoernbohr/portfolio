/* File: gulpfile.js */

// grab our gulp packages
var gulp                 = require('gulp'),
    gutil                = require('gulp-util');
var sass                 = require('gulp-sass');
var autoprefixer         = require('gulp-autoprefixer')
var browserSync          = require('browser-sync').create();
var notify               = require('gulp-notify')
var reload               = browserSync.reload;
var minify               = require('gulp-minify');
var concat               = require('gulp-concat');
var htmlhint             = require("gulp-htmlhint");
const jshint             = require('gulp-jshint');

var pathConfig           = 'source/scss/**/*.scss'
var pathConfigJs         = 'source/javascript/**/*.js'
var pathConfigCompiled   = 'css/'
var pathConfigMinified   = 'js/'

var sassOptions          = {errLogToConsole: true, outputStyle: 'compressed'};

var browserSyncConfig = {
    open: true,
    proxy: ""
};

gulp.task('scss', function() {
    gulp.src(pathConfig)
        .pipe(sass(sassOptions).on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(notify({message: 'css compiled'}))
        .pipe(gulp.dest(pathConfigCompiled));
});

// watch task
gulp.task('watch', function() {
    gulp.watch(pathConfig, ['scss'])
    gulp.watch(pathConfigJs, ['compress'])
});



//Browser sync
gulp.task('serve', ['scss' , 'compress' , 'htmlHint'], function() {
    gulp.watch(pathConfig, ['scss']).on('change', reload);
    gulp.watch(pathConfigJs, ['compress']).on('change', reload);
    gulp.watch("**/*.html", ['htmlHint']).on('change', reload);
    browserSync.init(browserSyncConfig);
    gulp.watch().on('change', browserSync.reload);

});


//JS Minify
gulp.task('compress', function() {
    gulp.src(pathConfigJs)
        .pipe(jshint())
        .pipe(jshint.reporter('default'))
        .pipe(concat('main.js'))
        .pipe(notify({message: 'JS compressed'}))
        .pipe(minify({
            ext:{
                src: '-debug.js',
                min:'-min.js'
            },
            ignoreFiles: ['.combo.js', '-min.js']
        }))
        .pipe(gulp.dest(pathConfigMinified))
});

//HTML Hint
gulp.task('htmlHint' , function() {
    gulp.src('*.html')
        .pipe(htmlhint())
        .pipe(htmlhint.reporter())
});



//Default task
gulp.task('default', ['scss' , 'watch' , 'serve' , 'compress' , 'htmlHint']);
