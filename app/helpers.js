import moment from 'moment';

export default {

  // Pass in value in pence. Assume default of en-GB & GBP
  getFormattedCurrency(value, locale = 'en-GB', currency = 'GBP'){
    var formattedValue = (value / 100).toLocaleString(locale, {style: 'currency', currency: currency});
    return formattedValue;
  },

  getFormattedDate(date){
    var transactionDate = moment(date).format('DD/MM/YYYY');
    var transactionTime = moment(date).format('HH:mm');
    return `${transactionDate} -  ${transactionTime}`;
  }

}
