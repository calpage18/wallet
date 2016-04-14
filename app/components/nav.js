import React from 'react';

export default React.createClass({

  render(){

    return(
      <header className="header">
        <span className="logo">Wallet</span>
        <nav className="nav">
          <ul className="nav-list">
            <li className="nav-list-item">Home</li>
            <li className="nav-list-item">Reset</li>
            <li className="nav-list-item">View Source</li>
          </ul>
        </nav>
      </header>
    )
  }
});
