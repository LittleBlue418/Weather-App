class Weather {
  constructor(city) {
    this.apiKey = '56d1d94288f17b712d30f794dd744259';
    this.city = city;
  }

  // Fetch weather from API
  async getWeather() {
    const response = await fetch(`
    http://api.weatherstack.com/current?access_key=${this.apiKey}&query=${this.city}`);

    const responseData = await response.json();

    return responseData;
  }

  // Change weather location
  changeLocation(city) {
    this.city = city;
  }
}