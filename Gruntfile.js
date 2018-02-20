module.exports = function (grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass: {
            dist: {
                files: {
                    'css/index.css': 'sass/*.scss'
                }
            }
        },
        connect: {
            connect: {
                server: {
                    options: {
                        port: 8000,
                        base: {
                            path: '/',
                            options: {
                                index: 'index.php',
                                maxAge: 300000
                            }
                        }
                    }
                }
            }
        },
        watch: {
            options: {
                livereload: true,
            },
            css: {
                files: ['**/*.scss'],
                tasks: ['sass'],
            },
        },

    });
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-sass');

    grunt.registerTask('default', ['connect', 'watch']);

};