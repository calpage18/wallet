import React from 'react';

import helpers from './../helpers.js';

export default React.createClass({

  getInitialState(){
    return{
      transactionValue: 0
    }
  },

  updateTransactionValue(e){
    /*
    * Thanks to http://embed.plnkr.co/jEOWlj/ for the help!
    */
    var value = e.target.value;
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
  },

  handleNewTransaction(type){
    // Get the value entered
    if(type === 'withdraw' && this.props.currentTotal - (this.state.transactionValue) < 0) {
      alert("can't go negative");
    } else {
      alert("this one's ok");
    }
  },

  render(){
    return(
      <div className="transaction-control">
        <div className="transaction-input-wrapper">
          <input type="text" value={this.state.transactionValue > 0 ? this.state.transactionValue : ''} placeholder="Enter an amount" className="transaction-input" onChange={this.updateTransactionValue} />
        </div>
        <div className="transaction-buttons">
          <button className="transaction-button transaction-button--deposit" onClick={this.handleNewTransaction.bind(this,'deposit')}>Deposit</button>
          <button className="transaction-button transaction-button--withdraw" onClick={this.handleNewTransaction.bind(this,'withdraw')}>Withdraw</button>
        </div>
      </div>
    )
  }
});
