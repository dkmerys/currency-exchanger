import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from "jquery";

import { ExchangeRate } from './../src/currency-exchanger.js';

$(document).ready(function () {
  $('#exchanger').click(function () {
    let dollars = $('#dollars').val();
    let newCurrency = $('#newCurrency').val();
    $('#dollars').val("");

    (async () => {
      let exchangeRate = new ExchangeRate();
      const response = await exchangeRate.getConvertedAmount(newCurrency, dollars);
      console.log('response: ', response);
      getElements(response);
    })();


    function getElements(response) {
      if (response) {
        $('.showRate').text(`The current exchange rate for US Dollars to ${newCurrency} is ${response.conversion_rates.EUR}.`);
        // $('.showNewAmount').text(`The temperature in Kelvins is ${response.main.temp} degrees.`);
      } else {
        $('.showRate').text(`There was an error handling your request. Are you sure you picked a real currency?`);
        $('.showNewAmount').text(`Please check your inputs and try again. Make sure it's a number.`);
      }
    }
  });
});