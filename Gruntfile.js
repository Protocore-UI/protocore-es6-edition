module.exports = function(grunt) {
    'use strict';

    /**
     * Require it at the top and pass in the grunt instance
     */
    require('time-grunt')(grunt);

    /**
     * Setup configuration
     */
    grunt.initConfig({
        pkg: grunt.file.readJSON('config/banner.json'),
        buildTags: "/* Project Name : <%= pkg.application.name %> Release version : <%= pkg.application.version %> */",

        configuredFiles: grunt.file.readJSON('config/servefiles.json'),

        clean: {
            build: ['prod']
        },
        shell: {
            uglify: {
                command: [
                    'node src/bower_components/rjs/dist/r.js -o config/build/optimize-build.js',
                    'node src/bower_components/rjs/dist/r.js -o config/build/copy-build.js',
                    'rm src/main-optimize.js',
                    'rm prod/main.js',
                    'mv prod/main-optimize.js prod/main.js'
                ].join('&&')
            }
        },
        usebanner: {
            buildTags: {
                options: {
                    position: 'top',
                    banner: '<%= buildTags %>',
                    linebreak: true
                },
                files: {
                    src: '<%= configuredFiles.usebanner %>'
                }
            }
        },
        jshint: {
            options: {
                jshintrc: 'config/lints/.jshintrc',
                ignores: '<%= configuredFiles.jshint.ignore %>'
            },
            all: '<%= configuredFiles.jshint.files %>'
        },
        jscs: {
            options: {
                config: 'config/lints/.jscsrc'
            },
            src: '<%= configuredFiles.jscs.files %>',
        },
        jsonlint: {
            files: {
                src: '<%= configuredFiles.jsonlint %>'
            }
        },
        csslint: {
            strict: {
                options: {
                    csslintrc: 'config/lints/.csslintrc',
                    ignores: '<%= configuredFiles.csslint.ignore %>'
                },
                src: '<%= configuredFiles.csslint.files %>'
            }
        },
        htmlhint: {
            Root_HTML_Files: {
                options: {
                    htmlhintrc: 'config/lints/.htmlhint-n-rc',
                    ignores: '<%= configuredFiles.htmlhint.Root_HTML_Files.ignore %>'
                },
                src: '<%= configuredFiles.htmlhint.Root_HTML_Files.files %>'
            },
            Templates: {
                options: {
                    htmlhintrc: 'config/lints/.htmlhint-t-rc',
                    ignores: '<%= configuredFiles.htmlhint.Templates.ignore %>'
                },
                src: '<%= configuredFiles.htmlhint.Templates.files %>'

            }
        },
        less: {
            customMade: {
                options: {
                    compress: false
                },
                files: '<%= configuredFiles.less.customMade.files %>'
            },
            prod: {
                options: {
                    compress: true
                },
                files: '<%= configuredFiles.less.customMade.files %>'
            }
        },
        watch: {
            less: {
                options: {
                    spawn: false
                },
                files: '<%= configuredFiles.watch.less.files %>',
                tasks: ['less:customMade']
            }
        },
        strip: {
            main: {
                src: 'prod/src/apps/**/*.js',
                options: {
                    inline: true,
                    nodes: ['console.log', 'debug']
                }
            }
        },
        autoprefixer: {
            options: {
                'browsers': ['last 2 versions']
            },
            multiple: {
                expand: true,
                flatten: true,
                src: 'src/stylesheets/css/common/*.css',
                dest: 'src/stylesheets/css/common/'
            }
        },
        htmlmin: {
            dist: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: '<%= configuredFiles.htmlmin.files %>'
            }
        },
        plato: {
            report: {
                files: {
                    'reports': ['src/apps/**/*.js', 'tests/**/*.js']
                }
            }
        },
        mdlint: ['*.md']
    });

    /**
     * Load tasks
     */
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-strip');
    grunt.loadNpmTasks('grunt-shell');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-jscs');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-csslint');
    grunt.loadNpmTasks('grunt-htmlhint');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-jsonlint');
    grunt.loadNpmTasks('grunt-banner');
    grunt.loadNpmTasks('grunt-plato');
    grunt.loadNpmTasks('grunt-mdlint');

    /**
     * Define tasks : Tasks for development eco - system.
     */
    grunt.registerTask('default', [
        'mdlint',
        'htmlhint',
        'jsonlint',
        'jscs',
        'jshint',
        'compileLessDev',
        'autofix',
        'csslint',
        'plato'
    ]);
    grunt.registerTask('dev', ['default']); // Alias for `default`.

    /**
     * Define tasks : Tasks for build eco - system.
     */
    grunt.registerTask('build', [
        'mdlint',
        'htmlhint',
        'jsonlint',
        'jscs',
        'jshint',
        'compileLessProd',
        'autofix',
        'csslint',
        'plato',
        'clean',
        'strip',
        'shell',
        'htmlmin',
        'usebanner'
    ]);

    /**
     * Define tasks : Tasks for less:compilation watch, Also alias for `watch`
     */
    grunt.registerTask('watchless', ['watch:less']);

    /**
     * Define sub-tasks : Tasks for Less compilation for development.
     */
    grunt.registerTask('compileLessDev', ['less:customMade']);

    /**
     * Define sub-tasks : Tasks for Less compilation for production.
     */
    grunt.registerTask('compileLessProd', ['less:prod']);

    /**
     * Define sub-tasks : Alias for `autofix`
     */
    grunt.registerTask('autofix', ['autoprefixer']);

    /**
     * Define sub-tasks : Alias for `plato`
     */
    grunt.registerTask('analysis', ['plato']);
};