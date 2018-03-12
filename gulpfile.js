// 引入gulp
var gulp = require('gulp');             // 基础库
var less=require('gulp-less');

// 引入gulp插件
var livereload = require('gulp-livereload'), // 网页自动刷新（服务器控制客户端同步刷新）
    webserver = require('gulp-webserver'); // 本地服务器

// 注册任务
gulp.task('webserver', function() {
    gulp.src( './' ) // 服务器目录（./代表根目录）
    .pipe(webserver({ // 运行gulp-webserver
        livereload: true, // 启用LiveReload
        open: true // 服务器启动时自动打开网页
    }));
});

//less > css
gulp.task('less', function(){
    gulp.src(['./**/*.less', '!./node_modules/**', '!./bower_components/**'])
    .pipe(less())
    .pipe(gulp.dest('./'));
})

// 监听任务
gulp.task('watch',function(){
    gulp.watch( '*.html', ['html']); // 监听根目录下所有.html文件
    gulp.watch('**/*.less', ['less']);
});

// 默认任务
gulp.task('default',['webserver','watch','less']);