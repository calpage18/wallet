import React from 'react';
import moment from 'moment';

import helpers from './../helpers.js';

export default React.createClass({


  render(){

    var style;

    if(this.props.transactionType === 'deposit'){
      style= {color: '#62BF66'};
    } else {
      style= {color: '#FF5854'};
    }
    
    return(
      <div className="transaction-row" style={style}>
        <div className="transaction-info">
          <span className="transaction-date">{helpers.getFormattedDate(this.props.transactionDate)}</span>
          <span className="transaction-type">{this.props.transactionType}</span>
        </div>
        <div className="transaction-details">
          <span className="transaction-amount">{helpers.getFormattedCurrency(this.props.transactionValue)}</span>
        </div>
      </div>
    )
  }
});
