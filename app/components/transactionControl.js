import React from 'react';

import helpers from './../helpers.js';

export default React.createClass({

  getInitialState(){
    return{
      transactionValue: 0
    }
  },

  updateTransactionValue(e){

    var value = e.target.value;

    // Test for only ints (just pound value) or floats (pound & pence)
    var floatRegex = /(\d)+(\.\d{2})?/;
    if(floatRegex.test(value)){
      /*
      * Thanks to http://embed.plnkr.co/jEOWlj/ for the help!
      */

      // remove all characters that aren't digit or dot
      value = value.replace(/[^0-9.]/g,'');
      // replace multiple dots with a single dot
      value = value.replace(/\.+/g,'.');
      // only allow 2 digits after a dot
      value = value.replace(/(.*\.[0-9][0-9]?).*/g,'$1');
      // replace multiple zeros with a single one
      value = value.replace(/^0+(.*)$/,'0$1');
      // remove leading zero
      value = value.replace(/^0([^.].*)$/,'$1');
      this.setState({
        transactionValue: value
      })
    }
  },

  handleNewTransaction(type){
    if(type === 'withdrawal' && this.props.currentTotal - (this.state.transactionValue * 100) < 0) {
      alert("Sorry, you can't have a negative balance");
    } else {

      var transactionData = {
        transactionValue: this.state.transactionValue * 100,
        transactionType: type
      };
      this.props.addNewTransaction(transactionData);
    }

    // Reset input to 0 for the next transaction
    this.setState({
      transactionValue: 0
    })
  },

  render(){
    return(
      <div className="transaction-control">
        <div className="transaction-input-wrapper">
          <input type="text" value={this.state.transactionValue > 0 ? this.state.transactionValue : ''} id="transaction-input" placeholder="Enter an amount" className="transaction-input" onChange={this.updateTransactionValue} />
        </div>
        <div className="transaction-buttons">
          <button className="transaction-button transaction-button--deposit" disabled={this.state.transactionValue === 0} onClick={this.handleNewTransaction.bind(this,'deposit')}>Deposit</button>
          <button className="transaction-button transaction-button--withdraw" disabled={this.state.transactionValue === 0} onClick={this.handleNewTransaction.bind(this,'withdrawal')}>Withdraw</button>
        </div>
      </div>
    )
  }
});
