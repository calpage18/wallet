import React from 'react';

import helpers from './../helpers.js';

export default React.createClass({

  getClassName(){
    if(this.props.totalBalance === 0){
      return 'total-value--zero';
    } else if(this.props.totalBalance >= 100000000) {
      return 'total-value--million';
    } else {
      return 'total-value';
    }
  },

  render(){
    return(
      <div className="total-row">
        <div className="total-label">Balance</div>
        <div className={this.getClassName()}>{helpers.getFormattedCurrency(this.props.totalBalance)}</div>
      </div>
    )
  }
});
