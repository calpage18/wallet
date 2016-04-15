import React from 'react';
import moment from 'moment';

// Components

export default React.createClass({

  getTransactionDate(){
    var transactionDate = moment(this.props.transactionDate).format('DD/MM/YYYY');
    var transactionTime = moment(this.props.transactionDate).format('HH:mm');
    return `${transactionDate} -  ${transactionTime}`;
  },

  getTransactionValue(){
    var transactionValue = (parseInt(this.props.transactionValue) / 100).toFixed(2);
    return transactionValue;
  },

  getRemainingBalance(){
    var remainingBalance = (parseInt(this.props.remainingBalance) / 100).toFixed(2);
    return remainingBalance;
  },

  render(){
    return(
      <div className="transaction-row">
        <div className="transaction-info">
          <span className="transaction-date">{this.getTransactionDate()}</span>
          { this.props.transactionDisplayType === 'all' ? <span className="transaction-type">{this.props.transactionType}</span> : null }
        </div>
        <div className="transaction-details">
          <span className="transaction-amount">£{this.getTransactionValue()}</span>
          <span className="new-total">£{this.getRemainingBalance()}</span>
        </div>
      </div>
    )
  }
});
