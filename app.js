
define(function(require) {

  var AppComponent = require('jsx!components/app')
  var CardCollection = require('collections/cards')
  var Lipsum = require('bower_components/ainojs/lipsum')
  var React = require('react')
  var Backbone = require('backbone')
  var Router = require('router')

  return function() {

    // initialize cards
    var cards = new CardCollection()

    // make dummy cards
    for(var i=0; i<20; i++) {
      cards.push({
        title: Lipsum.words(2,5,true),
        content: Lipsum.sentences(10,20)
      })
    }

    // create the top-level react app
    var App = AppComponent({
    	cards: cards
    })

    React.renderComponent(App, document.body)

    // start router
    Router.on('route', function(url, params) {

      // set state on App
      App.setState({ 
        url: url, 
        urlParams: params || [] 
      })
    })

    Backbone.history.start()
  }
})