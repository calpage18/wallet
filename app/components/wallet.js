import React from 'react';

// Components

export default React.createClass({

  render(){
    return(
      <div className="wallet-wrapper">
        <div className="wallet-name">My wallet</div>
        <div className="total-row">
          <div className="total-label">Balance</div>
          <div className="total-value">£349.28</div>
        </div>
      </div>
    )
  }
});
