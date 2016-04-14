var React = require('react');
var ReactDOM = require('react-dom');

var App = React.createClass({
  render: function() {
    return (
      <div>
        Good to go dawg!
      </div>
    );
  }
});
ReactDOM.render(<App />, document.getElementById('app'));
