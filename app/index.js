import React from 'react';
import ReactDOM from 'react-dom';

// Components
import Home from './components/home.js';

var App = React.createClass({
  render: function() {
    return <Home />;
  }
});
ReactDOM.render(<App />, document.getElementById('app'));
