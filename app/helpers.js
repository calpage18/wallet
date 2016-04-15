import moment from 'moment';

export default {

  // Pass in value in pence. Assume default of en-GB
  getFormattedCurrency(value, locale = 'en-GB'){
    var formattedValue = ((value / 100).toFixed(2)).toLocaleString(locale);
    return `£${formattedValue}`;
  },

  getFormattedDate(date){
    var transactionDate = moment(date).format('DD/MM/YYYY');
    var transactionTime = moment(date).format('HH:mm');
    return `${transactionDate} -  ${transactionTime}`;
  }

}
