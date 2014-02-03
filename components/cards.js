define(function(require) {

  var React = require('react')
  var Masonry = require('aino/masonry')
  var Globals = require('aino/globals')
  var $ = require('jquery')

  // internal global
  var masonry = null

  return React.createClass({

    componentDidMount: function(ul) {

      masonry = new Masonry(ul)
      masonry.layout()

      $(window).on('resize', this.resizeHandler)
    
    },

    componentWillUnmount: function() {
      $(window).off('resize', this.resizeHandler)
      masonry = null
    },

    resizeHandler: function() {
      masonry.layout()
    },

    componentDidUpdate: function() {
      this.resizeHandler()
    },

    render: function() {
      var cards = this.props.cards.map(function(card) {
        return (
          <li key={Math.random()}>
            <h2>{card.get('title')}</h2>
            <p>{card.get('content')}</p>
          </li>
          )
        })
      return (<ul>{cards}</ul>)
    }
  })
})