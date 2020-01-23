// initialize weather object
const weather = new Weather('stockholm');
const ui = new UI();

// Get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather)


function getWeather() {
  weather.getWeather()
    .then(results => {
      const location = results.location;
      const weather = results.current;
      console.log(location)
      console.log(weather)
      ui.paint(location, weather)
    })
    .catch(error => console.log(error));
}



