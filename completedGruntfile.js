module.exports = function( grunt ) {

    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-stylus');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-watch');

    var taskConfig = {
        connect: {
            development: {
                options: {
                    port: 9999,
                    open: 'http://localhost:9999',
                    base: 'build/',
                    hostname: 'localhost',
                    livereload: 35729
                }
            }
        },
        copy: {
            build: {
                files: [{
                    cwd: 'src/',
                    dest: 'build/',
                    expand: true,
                    src: ['index.html', '**/*.png']
                }]
            }
        },
        stylus: {
            options: {
                compress: true
            },
            build: {
                src: 'src/main.styl',
                dest: 'build/main.css'
            }
        },
        watch: {
            options: {
                livereload: true
            },
            stylus: {
                files: ['src/**/*.styl'],
                tasks: ['stylus']
            }
        }
    };

    grunt.initConfig( taskConfig );

    grunt.registerTask( 'serve', 'The serve task', [
        'copy',
        'stylus',
        'connect',
        'watch'
    ]);

};