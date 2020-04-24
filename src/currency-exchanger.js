export class ExchangeRate {
  async getConvertedAmount(currency, dollars) {
    console.log('i am in the method');
    console.log(currency);
    console.log(dollars)
    try {
      let response = await fetch(`https://prime.exchangerate-api.com/v5/${process.env.API_KEY}/latest/USD`);
      console.log('i got past the await');

      let jsonifiedResponse;
      if (response.ok && response.status == 200) {
        jsonifiedResponse = await response.json();
      } else {
        jsonifiedResponse = false;
      }
      return jsonifiedResponse;
    } catch (error) {
      console.log('in the catch');

      return false;
    }
  }
}
