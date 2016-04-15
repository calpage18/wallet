import React from 'react';

// Components
import Transactions from './transactions.js';

export default React.createClass({

  getInitialState(){
    return({
      transactions: [
        {
          transactionDate: 1460701451271,
          transactionType: 'deposit',
          transactionValue: 32045,
          remainingBalance: 32045,
        },
        {
          transactionDate: 1460700584456,
          transactionType: 'withdrawal',
          transactionValue: 345,
          remainingBalance: 32485,
        }
      ],
      transactionDisplayType: 'all'
    })
  },

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
        <Transactions transactions={this.state.transactions} transactionDisplayType={this.state.transactionDisplayType} />
      </div>
    )
  }
});
