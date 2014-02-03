require.config({
  baseUrl: '.',
  paths: {
    jquery: 'bower_components/jquery/jquery',
    underscore: 'bower_components/underscore/underscore',
    backbone: 'bower_components/backbone/backbone',
    react: 'bower_components/react/react',
    jsx: "lib/jsx",
    JSXTransformer: 'bower_components/react/JSXTransformer',
    aino: 'bower_components/ainojs'
  },
  shim: {
    jquery: {
      exports: '$'
    },
    underscore: {
      exports: '_'
    },
    backbone: {
      deps: ["underscore", "jquery"],
      exports: "Backbone"
    },
    react: {
      deps: ["JSXTransformer","jsx"]
    }
  }
})
require(['app'], function(app) {
  app()
})