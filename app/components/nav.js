import React from 'react';

export default React.createClass({

  resetHandler() {
    this.props.resetWallet();
  },

  homeHandler() {
    this.props.goHome();
  },

  render(){

    return(
      <header className="header">
        <span className="logo">Wallet</span>

        {/* Display as default. On resize, display this one above mobile*/}
        <nav className="nav">
          <ul className="nav-list">
            <li className="nav-list-item" onClick={this.homeHandler}>Home</li>
            <li className="nav-list-item" onClick={this.resetHandler}>Reset</li>
            <li className="nav-list-item"><a class="nav-link" href="https://github.com/calumspage/wallet" target="_blank">View Source</a></li>
          </ul>
        </nav>

        {/* On resize, display this one at mobile*/}
        <nav className="nav-small">
          <ul className="nav-list">
            <li className="nav-list-item" onClick={this.homeHandler}><i className="fa fa-home" aria-hidden="true"></i></li>
            <li className="nav-list-item" onClick={this.resetHandler}><i className="fa fa-refresh" aria-hidden="true"></i></li>
            <li className="nav-list-item"><a class="nav-link" href="https://github.com/calumspage/wallet"  target="_blank"><i className="fa fa-github" aria-hidden="true"></i></a></li>
          </ul>
        </nav>
      </header>
    )
  }
});
