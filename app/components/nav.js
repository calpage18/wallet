import React from 'react';

export default React.createClass({

  render(){

    return(
      <header className="header">
        <span className="logo">Wallet</span>

        {/* Display as default. On resize, display this one above mobile*/}
        <nav className="nav">
          <ul className="nav-list">
            <li className="nav-list-item">Home</li>
            <li className="nav-list-item">Reset</li>
            <li className="nav-list-item">View Source</li>
          </ul>
        </nav>

        {/* On resize, display this one at mobile*/}
        {/*<nav className="nav">
          <ul className="nav-list">
            <li className="nav-list-item"><i className="fa fa-home" aria-hidden="true"></i></li>
            <li className="nav-list-item"><i className="fa fa-refresh" aria-hidden="true"></i></li>
            <li className="nav-list-item"><i className="fa fa-github" aria-hidden="true"></i></li>
          </ul>
        </nav>*/}
      </header>
    )
  }
});
