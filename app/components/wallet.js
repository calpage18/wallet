import React from 'react';

// Components
import Transactions from './transactions.js';
import TransactionControl from './transactionControl.js';
import TotalRow from './totalRow.js';
import Tabs from './tabs.js';

export default React.createClass({

  getInitialState(){
    return({
      transactions: [],
      transactionDisplayType: 'all',
      totalBalance: 0
    })
  },

  addNewTransaction(transactionData){

    // Adjust the total balance as required
    var newTotal;
    if(transactionData.transactionType === 'deposit'){
      newTotal = this.state.totalBalance + transactionData.transactionValue;
    } else{
      newTotal = this.state.totalBalance - transactionData.transactionValue;
    }

    // Initialise newTransactionsList to existing transactions array so we can push on the new transaction
    var newTransactionsList = this.state.transactions;
    newTransactionsList.push(transactionData);

    // Update the transactions array and totalBalance
    this.setState({
      transactions: newTransactionsList,
      totalBalance: newTotal
    });
  },


  // Change the transactions displayed
  changeTransactionDisplayType(type){
    if(type != this.state.transactionDisplayType){
      this.setState({
        transactionDisplayType: type
      })
    }
  },

  render(){

    // REMOVE AFTER TESTING FUNCTION
    var newDepositData = {
      transactionDate: Date.now(),
      transactionType: 'deposit',
      transactionValue: 32045,
      remainingBalance: this.state.totalBalance + 32045
    };

    var newWithdrawalData = {
      transactionDate: Date.now(),
      transactionType: 'withdrawal',
      transactionValue: 21045,
      remainingBalance: this.state.totalBalance - 21045
    };

    return(
      <div className="wallet-wrapper">

        {/*Component - <WalletName />*/}
        <div className="wallet-name">
          <div className="wallet-name-label">My wallet</div>
          <i className="fa fa-pencil wallet-name-edit-button" aria-hidden="true"></i>
        </div>

        <TransactionControl addNewTransaction={this.addNewTransaction} currentTotal={this.state.totalBalance}/>


        {/*Component - <Tabs />*/}
        <Tabs activeTab={this.state.transactionDisplayType} changeTransactionDisplayType={this.changeTransactionDisplayType} />

        {/*Component - <Transactions />*/}
        <Transactions transactions={this.state.transactions} transactionDisplayType={this.state.transactionDisplayType} />
        <TotalRow totalBalance={this.state.totalBalance} />

      </div>
    )
  }
});
