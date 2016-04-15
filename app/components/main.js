import React from 'react';

// Components
import Nav from './nav.js';
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
    var newTotal = 0;
    if(transactionData.transactionType === 'deposit'){
      newTotal = this.state.totalBalance + transactionData.transactionValue;
    } else{
      newTotal = this.state.totalBalance - transactionData.transactionValue;
    }

    // Add this new total to the transactionData object
    transactionData.remainingBalance = newTotal;

    // Initialise newTransactionsList to existing transactions array so we can push on the new transaction
    var newTransactionsList = this.state.transactions;
    newTransactionsList.push(transactionData);

    // Update the transactions array and totalBalance
    this.setState({
      transactions: newTransactionsList,
      totalBalance: newTotal
    });

    // Save this data to localStorage. Using these properties instead of state because setState might not have finished executing
    window.localStorage.setItem('wallet-state', JSON.stringify({
      transactions: newTransactionsList,
      totalBalance: newTotal
    }));
  },


  // Change the transactions displayed when clicking on a tab
  changeTransactionDisplayType(type){
    if(type != this.state.transactionDisplayType){
      this.setState({
        transactionDisplayType: type
      })
    }
  },

  //Reset wallet from nav bar
  resetWallet(){
    this.setState({
      transactions: [],
      transactionDisplayType: 'all',
      totalBalance: 0
    });
    window.localStorage.setItem('wallet-state', {});
  },

  // No real concept of 'home' in this app, so just set transactions display to 'all'
  goHome(){
    this.setState({
      transactionDisplayType: 'all'
    })
  },


  // Check if wallet data exists in localStorage and load it if it does.
  componentWillMount(){
    if(window.localStorage.getItem('wallet-state')){
      var dataFromLocalStorage = JSON.parse(window.localStorage.getItem('wallet-state'));
      this.setState(dataFromLocalStorage);
    }
  },

  render(){

    return(

      <div>
        <Nav resetWallet={this.resetWallet} goHome={this.goHome}/>
        <div className="main">
          <div className="wallet-wrapper">

            <TransactionControl addNewTransaction={this.addNewTransaction} currentTotal={this.state.totalBalance}/>
            <Tabs activeTab={this.state.transactionDisplayType} changeTransactionDisplayType={this.changeTransactionDisplayType} />
            <Transactions transactions={this.state.transactions} transactionDisplayType={this.state.transactionDisplayType} />
            <TotalRow totalBalance={this.state.totalBalance} />

          </div>
        </div>
      </div>

    )
  }
});
