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

        {/*Component - <Tabs />*/}
        <div className="tabs">
          <div className="tab">All</div>
          <div className="tab">Deposits</div>
          <div className="tab">Withdrawals</div>
        </div>

        {/*Component - <Transactions />*/}
        <div className="transactions">

          {/*Component - <TransactionRow />*/}
          <div className="transaction-row">
            <div className="transaction-info">
              <span className="transaction-date">3rd April 2016</span>
              <span className="transaction-type">Deposit</span>
            </div>
            <div className="transaction-details">
              <span className="transaction-amount">£320</span>
              <span className="new-total">£349.28</span>
            </div>
          </div>
        </div>
      </div>
    )
  }
});
