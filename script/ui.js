class UI {
  constructor() {
    this.locationDisplay = document.getElementById('w-location');
    this.description = document.getElementById('w-desc');
    this.string = document.getElementById('w-string');
    this.details = document.getElementById('w-details');
    this.icon = document.getElementById('w-icon');

    this.humidity = document.getElementById('w-humidity');
    this.feelsLike = document.getElementById('w-feels-like');
    this.windSpeed = document.getElementById('w-wind-speed');
    this.windDirection = document.getElementById('w-wind-direction');
    this.uvIndex = document.getElementById('w-uv-index');
  }

  paint(location, weather) {
    this.locationDisplay.textContent = `${location.name}, ${location.country}`;
    this.description.textContent = weather.weather_descriptions;
    this.string.textContent = weather.temperature+'℃';
    this.icon.setAttribute('src', weather.weather_icons);

    this.humidity.textContent = `Relative Humidity: ${weather.humidity}%`
    this.feelsLike.textContent = `Feels Like: ${weather.feelslike}℃`
    this.windSpeed.textContent = `Wind Speed: ${weather.wind_speed} MPH`
    this.windDirection.textContent = `Wind Direction: From ${weather.wind_dir}`
    this.uvIndex.textContent = `UV Index: ${weather.uv_index}`
  }
}