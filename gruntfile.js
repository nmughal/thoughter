
module.exports = function configureGrunt(gruntConfig){

  gruntConfig.initConfig({

    clean: ['build/'],

    copy: {

      copythehtml: {
        files: [
          {
            cwd: 'src/',
            src:[ '*.html'],
            dest: 'build/',
            expand: true
          }
        ]
      },

      copyjs: {
        files: [
          {
            cwd: 'src/js',
            src:[ '*.js'],
            dest: 'build/js',
            expand: true
          }
        ]
      },

      copyjquery: {
        files: [
          {
            cwd: 'node_modules/jquery/dist/',
            src: ['jquery.js'],
            dest: 'build/js/vendor',
            expand: true
          }
        ]
      }

    },

    sass: {

      all: {
        files: {
          'build/style.css': 'src/sass/main.scss'
        }
      }
    },

    jshint: {

      appjs: {
        options: {
          jshintrc: '.jshintrc'
        },
        files: {
          src: ['src/**/*/.js']
        }
      }
    },

    karma: {
      all: {
        options: {
          frameworks: ['mocha', 'chai'],
          browsers: ['Chrome'],
          singleRun: true,
          files: [
            'src/**/*.js',
            'tests/specs/**/main.specs.js'
          ]
        }
      }
    }

  });

  require('load-grunt-tasks')(gruntConfig);

  gruntConfig.registerTask('build', ['jshint', 'karma', 'clean', 'copy', 'sass'] );

};
