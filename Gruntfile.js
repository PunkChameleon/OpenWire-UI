module.exports = function (grunt) {

    'use strict';

    grunt.initConfig({
        jslint : {
            client : {
                src : [
                    '*.js',
                    'lib/*.js',
                    'lib/**/*.js',
                    'Gruntfile.js'
                ],
                directives : {
                    browser : true,
                    node : true,
                    nomen : true,
                    sloppy : true,
                    unparam : true,
                    predef : ['require', 'define']
                }
            }
        },
        watch : {
            files : [
                'lib/*.js',
                'lib/**/*.js',
                'Gruntfile.js'
            ],
            tasks : ['jslint']
        },
        requirejs : {
            compile : {
                options : {
                    baseUrl : "public/js",
                    mainConfigFile : "public/js/config.js",
                    name : "config",
                    out : "optimized/optimized.min.js",
                    preserveLicenseComments: false
                }
            }
        },

        replace : {
            build : {
                src : ['public/index.html'],
                dest : 'optimized/index.html',
                replacements : [
                    { from : 'js/config', to : 'optimized.min.js' },
                    { from : 'css/main.css', to : 'optimized.min.css' },
                    { from : '<link rel="stylesheet" href="css/bootstrap.min.css">', to : ' ' },
                    { from : '<link rel="stylesheet" href="css/bootstrap-theme.min.css">', to : ' ' },
                    { from : 'js/vendor/require.js', to : '//cdnjs.cloudflare.com/ajax/libs/require.js/2.1.15/require.min.js' }
                ]
            }
        },

        cssmin : {
            combine : {
                files : {
                    'optimized/optimized.min.css' : [
                        'public/css/bootstrap.css',
                        'public/css/bootstrap-theme.css',
                        'public/css/main.css'
                    ]
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-jslint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-requirejs');
    grunt.loadNpmTasks('grunt-text-replace');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    grunt.registerTask('default', ['jslint']);

    grunt.registerTask('build', ['cssmin', 'requirejs', 'replace:build']);
};
