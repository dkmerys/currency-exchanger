export class Converter {

  async getConversionRates(newCurrency, dollars) {
    try {
      let response = await fetch(`https://prime.exchangerate-api.com/v5/${process.env.API_KEY}/latest/USD`);

      let jsonifiedResponse;
      if (response.ok && response.status == 200) {
        jsonifiedResponse = await response.json();
      } else {
        jsonifiedResponse = false;
      }
      let conversionRate = jsonifiedResponse.conversion_rates[newCurrency];
      return jsonifiedResponse;
    } catch (error) {


      return false;
    }
  }
}
