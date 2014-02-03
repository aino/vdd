define(function(require) {

  var React = require('react')
  var CardsComponent = require('jsx!components/cards')

  return React.createClass({

    getInitialState: function() {
      return { 
        url: 'loading',
        urlParams: []
      }
    },

    componentDidMount: function() {
      this.props.cards.on('add change remove', function() {
        this.setProps({ cards: this.props.cards })
      }, this)
    },

    componentWillUnmount: function() {
      this.props.cards.off(null, null, this)
    },

    render: function() {

      // rendering logic based on state goes here
      var main = <CardsComponent cards={this.props.cards}/>

      if ( this.state.url == '1up' ) {
        main = (<h1>Extraliv!!</h1>)
      }

      return (
        <div className={this.state.url}>
          <div className="menu">
            <a href="#">Home</a><a href="#1up">1up</a>
          </div>
          {main}
        </div>
      )
    }
  })
})