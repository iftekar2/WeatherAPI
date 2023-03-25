//In here I am adding eventlistener to the search section
function fetchWeather(city) {
  fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=" +
      city +
      "&units=metric&appid=da62bb4f50bc460dcbe520246d0ffad7"
  )
    .then((response) => response.json())
    .then((data) => {
      this.displayWeather(data);
    });
}

function displayWeather(data) {
  const { name } = data;
  const { icon } = data.weather[0];
  const { temp } = data.main;
  const { humidity } = data.main;
  const { main } = data.weather[0];
  const { speed } = data.wind;
  document.querySelector(".city").innerText = "Weather in " + name;
  document.querySelector(".icon").src =
    "https://openweathermap.org/img/wn/" + icon + "@2x.png";
  document.querySelector(".temprature").innerText =
    Math.trunc((temp * 9) / 5 + 32) + "°F";
  document.querySelector(".description").innerText = main;
  document.querySelector(".humadity").innerText = humidity + "%";
  document.querySelector(".wind").innerText = speed;
}

function searchCity() {
  this.fetchWeather(document.querySelector(".userInput").value);
}

document
  .querySelector(".searchSection button")
  .addEventListener("click", function () {
    searchCity();
    document.querySelector(".weatherApp").style.height = "450px";
  });
