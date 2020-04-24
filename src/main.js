import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from "jquery";

import { Converter } from './../src/currency-exchanger.js';

$(document).ready(function () {
  $('#exchanger').click(function () {
    event.preventDefault();
    let dollars = parseInt($("#dollars").val());
    let newCurrency = $('#newCurrency').val();
    
    (async () => {
      let converter = new Converter();
      const response = await converter.getConversionRates();

      let convertedAmount = (response.conversion_rates[newCurrency] * dollars)
      getElements(response);
      return convertedAmount;
    })();
    
    function getElements(response) {
      if (response) {
        // $('.showRate').text(`The current exchange rate for 1 USD to 1 ${newCurrency} is: ${response.conversion_rates.USD}.`);
        $('.showNewAmount').text(`${dollars} USD is ${(response.conversion_rates[newCurrency] * dollars)} ${newCurrency}.`);
      } else {
        $('.showNewAmount').text(`There was an error handling your request. Please double-check your API key and try again.`);
      }
    }  
  });
});

