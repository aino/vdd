define(function(require) {
	
	var Backbone = require('backbone')
	var Card = require('models/card')

	return Backbone.Collection.extend({
    model: Card
  })
})