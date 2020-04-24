export class ExchangeRate {
  async getConvertedAmount(currency) {
    console.log('i am in the method')
    try {
      let response = await fetch(`https://prime.exchangerate-api.com/v5/${process.env.API_KEY}/latest/${currency}`);
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
}