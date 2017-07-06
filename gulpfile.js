/**
 * Created by dell-1 on 2017/7/6.
 */

var gulp = require('gulp'),
    imagemin = require('gulp-imagemin'),
    minifyCSS = require('gulp-minify-css'),
    htmlmin = require('gulp-htmlmin'),
    uglify = require('gulp-uglify');

//ѹ��html
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


//ѹ��css
gulp.task('css', function () {
    // 1\. �ҵ��ļ�
    gulp.src('css/*.css')
        // 2\. ѹ���ļ�
        .pipe(minifyCSS())
        // 3\. ���Ϊѹ���ļ�
        .pipe(gulp.dest('minified/css'))
})

// ��������ʹ�� gulp auto ����������
gulp.task('auto', function () {
    // �����ļ��޸ģ����ļ����޸���ִ�� css ����
    gulp.watch('css/*.css', ['css'])
});

// ʹ�� gulp.task('default') ����Ĭ������
// ��������ʹ�� gulp ���� css ����� auto ����
gulp.task('default', ['css', 'auto'])
//ѹ��js
gulp.task('js', function() {
    return gulp.src('js/*.js')
        .pipe(uglify())    //ѹ��
        .pipe(gulp.dest('minified/js'));  //���
});
//ѹ��ͼƬ
// ѹ��ͼƬ����
// ������������ gulp images ����������
gulp.task('images', function () {
    // 1. �ҵ�ͼƬ
    gulp.src('images/*.*')
        // 2. ѹ��ͼƬ
        .pipe(imagemin({
            progressive: true
        }))
        // 3. ���ͼƬ
        .pipe(gulp.dest('minified/images'))
});

// ��������ʹ�� gulp auto ����������
gulp.task('auto', function () {
    // �����ļ��޸ģ����ļ����޸���ִ�� images ����
    gulp.watch('images/*.*)', ['images'])
});

// ʹ�� gulp.task('default') ����Ĭ������
// ��������ʹ�� gulp ���� images ����� auto ����
gulp.task('default', ['images', 'auto'])