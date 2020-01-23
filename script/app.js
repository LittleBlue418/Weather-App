// initialize weather object
const weather = new Weather('london');

// Get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather)


function getWeather() {
  weather.getWeather()
    .then(results => {
      console.log(results)
    })
    .catch(error => console.log(error));
}

