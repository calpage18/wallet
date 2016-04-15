import React from 'react';
import ReactDOM from 'react-dom';

// Components
import Main from './components/main.js';

var App = React.createClass({
  render: function() {
    return <Main />;
  }
});
ReactDOM.render(<App />, document.getElementById('app'));
