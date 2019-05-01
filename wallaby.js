const wallabyWebpack = require('wallaby-webpack');
const path = require('path');

const compilerOptions = Object.assign(
  require('./tsconfig.json').compilerOptions,
  {
    "types": ["jasmine", "node"]
  }
);

module.exports = function (wallaby) {
  const webpackPostprocessor = wallabyWebpack({
    entryPatterns: [
      'wallabyTest.js',
      'apps/**/*spec.js',
      'libs/**/*spec.js'
    ],

    module: {
      rules: [
        {test: /\.css$/, loader: ['raw-loader']},
        {test: /\.html$/, loader: 'raw-loader'},
        {test: /\.ts$/, loader: '@ngtools/webpack', include: /node_modules/, query: {tsConfigPath: 'tsconfig.json'}},
        {test: /\.js$/, loader: 'angular2-template-loader', exclude: /node_modules/},
        {test: /\.styl$/, loaders: ['raw-loader', 'stylus-loader']},
        {test: /\.less$/, loaders: ['raw-loader', {loader: 'less-loader'}]},
        {test: /\.scss$|\.sass$/, loaders: ['raw-loader', 'sass-loader']},
        {test: /\.(jpg|png|svg)$/, loader: 'raw-loader'}
      ]
    },

    resolve: {
      extensions: ['.js', '.ts'],
      modules: [
        path.join(wallaby.projectCacheDir, 'apps'),
        path.join(wallaby.projectCacheDir, 'libs'),
        'node_modules'
      ],
      alias: {
        '@mw-angular/complex-filter': path.join(
          wallaby.projectCacheDir,
          'libs/mw-angular/complex-filter/src/src/public-api.ts'
        )
      }
    },
    node: {
      fs: 'empty',
      net: 'empty',
      tls: 'empty',
      dns: 'empty'
    }
  });

  return {
    files: [
      {pattern: 'wallabyTest.ts', load: false},

      {pattern: 'apps/**/*.+(ts|css|less|scss|sass|styl|html|json|svg)', load: false},
      {pattern: 'apps/**/*.d.ts', ignore: true},
      {pattern: 'apps/**/*spec.ts', ignore: true},

      {pattern: 'libs/**/*.+(ts|css|less|scss|sass|styl|html|json|svg)', load: false},
      {pattern: 'libs/**/*.d.ts', ignore: true},
      {pattern: 'libs/**/*spec.ts', ignore: true}
    ],

    tests: [
      {pattern: 'apps/**/*spec.ts', load: false},
      {pattern: 'apps/**/*e2e-spec.ts', ignore: true},

      {pattern: 'libs/**/*spec.ts', load: false},
    ],

    testFramework: 'jasmine',

    compilers: {
      '**/*.ts': wallaby.compilers.typeScript(compilerOptions)
    },

    /*middleware: function (app, express) {
      const path = require('path');
      app.use('/favicon.ico', express.static(path.join(__dirname, 'src/favicon.ico')));
      app.use('/assets', express.static(path.join(__dirname, 'src/assets')));
    },*/

    env: {
      kind: 'chrome'
    },

    postprocessor: webpackPostprocessor,

    setup: function () {
      window.__moduleBundler.loadTests();
    },

    debug: true
  };
};
