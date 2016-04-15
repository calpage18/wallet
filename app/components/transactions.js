import React from 'react';
import _ from 'underscore';

// Components
import TransactionRow from './transactionRow.js';

export default React.createClass({

  getTransactionRows(){

    // Sort rows by date
    var sortedRows = _.sortBy(this.props.transactions, 'transactionDate');

    // Reverse the rows to get most recent first
    sortedRows = sortedRows.reverse();

    // Map the array into <TransactionRow /> components
    var rows = sortedRows.map(row => {
      if(this.props.transactionDisplayType === "all" || this.props.transactionDisplayType === row.transactionType){
        return (
          <TransactionRow transactionDate={row.transactionDate}
            transactionType={row.transactionType}
            transactionValue={row.transactionValue}
            transactionDisplayType={this.props.transactionDisplayType}
            remainingBalance={row.remainingBalance}
            key={row.transactionDate} />
        )
      }
    });
    return rows;
  },

  render(){
    return(
      <div className="transactions">
        {this.getTransactionRows()}
      </div>
    )
  }
});
