import React from 'react';

// Components

export default React.createClass({

  render(){
    return(
      <div className="wallet-wrapper">

        {/*Component - <WalletName />*/}
        <div className="wallet-name">
          <div className="wallet-name-label">My wallet</div>
          <i className="fa fa-pencil wallet-name-edit-button" aria-hidden="true"></i>
        </div>

        {/*Component - <TotalRow />*/}
        <div className="total-row">
          <div className="total-label">Balance</div>
          <div className="total-value">£349.28</div>
        </div>
      </div>
    )
  }
});
