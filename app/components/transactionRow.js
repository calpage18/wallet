import React from 'react';
import moment from 'moment';

import helpers from './../helpers.js';

export default React.createClass({


  render(){
    return(
      <div className="transaction-row">
        <div className="transaction-info">
          <span className="transaction-date">{helpers.getFormattedDate(this.props.transactionDate)}</span>
          { this.props.transactionDisplayType === 'all' ? <span className="transaction-type">{this.props.transactionType}</span> : null }
        </div>
        <div className="transaction-details">
          <span className="transaction-amount">{helpers.getFormattedCurrency(this.props.transactionValue)}</span>
          <span className="new-total">{helpers.getFormattedCurrency(this.props.remainingBalance)}</span>
        </div>
      </div>
    )
  }
});
