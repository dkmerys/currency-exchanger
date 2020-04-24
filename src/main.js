import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from "jquery";

import { Converter } from './../src/currency-exchanger.js';

function getElements(response) {
  if (response) {
    // $('.showRate').text(`The current exchange rate for 1 USD to 1 ${newCurrency} is: ${response.conversion_rates.USD}.`);
    $('.showNewAmount').text(`${dollars} USD is ${(response.conversion_rates[newCurrency] * dollars)} ${newCurrency}.`);
  } else {
    $('.showRate').text(`There was an error handling your request. Are you sure you picked a real currency?`);
    $('.showNewAmount').text(`Please check your inputs and try again. Make sure it's a number.`);
  }
}

$(document).ready(function () {
  $('#exchanger').click(function () {
    event.preventDefault();
    let dollars = parseInt($("#dollars").val());
    let newCurrency = $('#newCurrency').val();
    
    (async () => {
      let converter = new Converter();
      const response = await converter.getConversionRates(newCurrency, dollars);
      let convertedAmount = (response.conversion_rates[newCurrency] * dollars)
      getElements(response);
      return convertedAmount;
    })();
  });
});

