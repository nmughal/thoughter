module.exports = function karmConfig(config){
  config.set({
    frameworks: [ 'mocha', 'chai' ],
    browsers: [ 'Chrome' ],
    singleRun: true,
    files:
    [
      'src/**/*.js',
      'node_modules/sinon/pkg/sinon-2.0.0.js',
      'test/specs/**/*.js'
    ]
  });


};
