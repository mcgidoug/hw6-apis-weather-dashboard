// declare weather api functions within weather variable
let weather = {
  // api key
  apiKey: "f1ca64ad1d9048ede6bc992bc906defa",
  // fetch weather function - fetch from open weather with city input
  fetchWeather: function (city) {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&units=metric&appid=" +
        this.apiKey
    )
      .then((response) => response.json())
      .then((data) => this.weatherFunction(data));
  },
  // sorting through fetched data to retrieve city weather info
  weatherFunction: function (data) {
    let { name } = data;
    let { icon, description } = data.weather[0];
    let { temp, humidity } = data.main;
    let { speed } = data.wind;
    // query selectors referencing classes on html to insert api weather data
    document.querySelector(".cityName").innerText = "Weather in " + name;
    document.querySelector(".icon").src =
      "https://openweathermap.org/img/wn/" + icon + "@2x.png";
    document.querySelector(".description").innerText = description;
    document.querySelector(".temperature").innerText = temp + "°C";
    document.querySelector(".humidity").innerText =
      "Humidity: " + humidity + "%";
    document.querySelector(".windSpeed").innerText =
      "Wind Speed: " + speed + "km/h";
  },
  // target searchbar value - use for input value of weather api
  searchCity: function () {
    this.fetchWeather(document.querySelector(".search-bar").value);
  },
};
// click search to find weather
document.querySelector(".search button").addEventListener("click", function () {
  weather.searchCity();
});
