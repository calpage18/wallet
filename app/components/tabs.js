import React from 'react';

var Tab = React.createClass({

  getClassName(){
    if(this.props.activeTab === this.props.transactionType){
      return 'tab tab--active';
    } else {
      return 'tab';
    }
  },

  render(){
    return <div className={this.getClassName()} onClick={this.props.changeTransactionDisplayType.bind(null,this.props.transactionType)}>{this.props.tabName}</div>;
  }
});


export default React.createClass({

  render(){
    return(
      <div className="tabs">
        <Tab activeTab={this.props.activeTab} transactionType="all" tabName="All" changeTransactionDisplayType={this.props.changeTransactionDisplayType}/>
        <Tab activeTab={this.props.activeTab} transactionType="deposit" tabName="Deposits" changeTransactionDisplayType={this.props.changeTransactionDisplayType} />
        <Tab activeTab={this.props.activeTab} transactionType="withdrawal" tabName="Withdrawals" changeTransactionDisplayType={this.props.changeTransactionDisplayType} />
      </div>
    )
  }
});
