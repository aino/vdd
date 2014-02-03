
define(function(require) {

  var Backbone = require('backbone')

  var Router = Backbone.Router.extend({
    routes: {
      "": "home",
      "1up": "1up"
    }
  })

  return new Router()

})