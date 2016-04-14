import React from 'react';

// Components
import Nav from './nav.js';
import Wallet from './wallet.js';

export default React.createClass({

  render(){
    return(
      <div>
        <Nav />
        <div className="main">
          <Wallet />
        </div>
      </div>
    )
  }
});
