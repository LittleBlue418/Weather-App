// Initialise storage
const storage = new Storage();

// get location data
const weatherLocation = storage.getLocationData();

// initialize weather object
const weather = new Weather(weatherLocation.city);
const ui = new UI();


// Get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather)

// Change location event
document.getElementById('w-change-btn').addEventListener('click', (e) => {
  const city = document.getElementById('city').value;

  // Change weather
  weather.changeLocation(city);

  // Get and display weather
  getWeather();

  // Set local storage
  storage.setLocationData(city)

  // Close modal
  $('#locModal').modal('hide');
})


function getWeather() {
  weather.getWeather()
    .then(results => {
      const location = results.location;
      const weather = results.current;
      ui.paint(location, weather)
    })
    .catch(error => console.log(error));
}



