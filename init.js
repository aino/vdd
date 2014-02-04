!function(ready) {
  var s = document.createElement('script'), r
  s.src = 'bower_components/requirejs/require.js'
  document.body.appendChild(s)
  s.onload = s.onreadystatechange = function() {
    r = this.readyState
    if (!this.l && ( !r || r == 'loaded' || r == 'complete' )) {
      this.l = 1
      ready()
    }
  }
}(function() {
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
  require(['index'], function(index) {
    index()
  })
})