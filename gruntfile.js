
module.exports = function configureGrunt(gruntConfig){

  gruntConfig.initConfig({

    clean: ['build/'],

    copy: {

      copythehtml: {
        files: [
          {
            cwd: 'src/', //cwd = current working directory
            src:[ '*.html'],
            dest: 'build/', //dest =
            expand: true
          }
        ]
      },

      copyjs: {
        files: [
          {
            cwd: 'src/js', //cwd = current working directory
            src:[ '*.js'],
            dest: 'build/js/vendor', //dest =
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
