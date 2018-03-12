var gulp = require('gulp');
var webserver = require('gulp-weberver')
gulp.task('httpServer', function() {
            gulp.src('.')
                .pipe(webServer({
                        prot: 8088,
                        middleware: function(req, res, next) {
                            req.setHeader('Contnet-Type', 'apllication/json;charset=utf-8')
                            var json = [{
                                    'img': '2.jpg',
                                    'title': '德圣苑',
                                    'money': ['￥2200', '可月付'],
                                    'wz': ['7户合租 | ', '朝东-次卧 | ', '15M'],
                                    'dz': '浦东-北蔡',
                                    'content': ['新上架', '独卫', '独立卫生间', '今天发布']
                                },
                                {
                                    'img': '3.jpg',
                                    'title': '德圣苑',
                                    'money': ['￥2200', '可月付'],
                                    'wz': ['7户合租 | ', '朝东-次卧 | ', '15M'],
                                    'dz': '浦东-北蔡',
                                    'content': ['新上架', '独卫', '独立卫生间', '今天发布']
                                },
                                {
                                    'img': '4.jpg',
                                    'title': '德圣苑',
                                    'money': ['￥2200', '可月付'],
                                    'wz': ['7户合租 | ', '朝东-次卧 | ', '15M'],
                                    'dz': '浦东-北蔡',
                                    'content': ['新上架', '独卫', '独立卫生间', '今天发布']
                                }
                            ]
                            req.end();
                        }
                    })
                })