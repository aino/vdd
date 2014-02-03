define(function(require) {

  var React = require('react')
  var Masonry = require('aino/masonry')
  var Globals = require('aino/globals')

  return React.createClass({

    componentDidMount: function(ul) {
      
      var masonry = Globals.get('masonry')

      if (!masonry) {
        masonry = new Masonry(ul)
        masonry.layout()
        Globals.set('masonry', masonry)
      }

      $(window).on('resize', this.resizeHandler)
    
    },

    componentWillUnmount: function() {
      $(window).off('resize', this.resizeHandler)
      Globals.set('masonry', null)
    },

    resizeHandler: function() {
      if( Globals.get('masonry') )
        Globals.get('masonry').layout()
    },

    componentDidUpdate: function() {
      this.componentDidMount()
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