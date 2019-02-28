// This shows a full config file!
module.exports = function (grunt) {
    grunt.initConfig({
        watch: {
            files: 'less/**/*.less',
            tasks: ['less', 'postcss:dist']
        },
        less: {
            development: {
                options: {
                    paths: ['css']
                },
                files: {
                    'css/style.css': 'less/main.less'
                },    
            }
        },
        postcss: {
            dev: {
                options: {
                    map: true,
                    processors: [
                        require('autoprefixer')({browsers: 'last 1 version'}).postcss
                    ]
                },
                dist: {
                    src: 'css/*.css'
                }
            }
        },
        browserSync: {
            dev: {
                bsFiles: {
                    src : [
                        'css/*.css',
                        '*.html'
                    ]
                },
                options: {
                    watchTask: true,
                    server: './'
                }
            }
        }
    });

    // load npm tasks
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-browser-sync');
    grunt.loadNpmTasks('grunt-postcss');

    // define default task
    grunt.registerTask('default', ['browserSync', 'watch']);
};