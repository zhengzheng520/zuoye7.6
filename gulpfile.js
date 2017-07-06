/**
 * Created by dell-1 on 2017/7/6.
 */

var gulp = require('gulp'),
    imagemin = require('gulp-imagemin'),
    minifyCSS = require('gulp-minify-css'),
    htmlmin = require('gulp-htmlmin'),
    uglify = require('gulp-uglify');

//压缩html
gulp.task('src', function () {
    var options = {
        collapseWhitespace:true,
        collapseBooleanAttributes:true,
        removeComments:true,
        removeEmptyAttributes:true,
        removeScriptTypeAttributes:true,
        removeStyleLinkTypeAttributes:true,
        minifyJS:true,
        minifyCSS:true
    };
    gulp.src('src/*.html')
        .pipe(htmlmin(options))
        .pipe(gulp.dest('minified/html'));
})


//压缩css
gulp.task('css', function () {
    // 1\. 找到文件
    gulp.src('css/*.css')
        // 2\. 压缩文件
        .pipe(minifyCSS())
        // 3\. 另存为压缩文件
        .pipe(gulp.dest('minified/css'))
})

// 在命令行使用 gulp auto 启动此任务
gulp.task('auto', function () {
    // 监听文件修改，当文件被修改则执行 css 任务
    gulp.watch('css/*.css', ['css'])
});

// 使用 gulp.task('default') 定义默认任务
// 在命令行使用 gulp 启动 css 任务和 auto 任务
gulp.task('default', ['css', 'auto'])
//压缩js
gulp.task('js', function() {
    return gulp.src('js/*.js')
        .pipe(uglify())    //压缩
        .pipe(gulp.dest('minified/js'));  //输出
});
//压缩图片
// 压缩图片任务
// 在命令行输入 gulp images 启动此任务
gulp.task('images', function () {
    // 1. 找到图片
    gulp.src('images/*.*')
        // 2. 压缩图片
        .pipe(imagemin({
            progressive: true
        }))
        // 3. 另存图片
        .pipe(gulp.dest('minified/images'))
});

// 在命令行使用 gulp auto 启动此任务
gulp.task('auto', function () {
    // 监听文件修改，当文件被修改则执行 images 任务
    gulp.watch('images/*.*)', ['images'])
});

// 使用 gulp.task('default') 定义默认任务
// 在命令行使用 gulp 启动 images 任务和 auto 任务
gulp.task('default', ['images', 'auto'])