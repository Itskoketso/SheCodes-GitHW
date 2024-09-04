function searchCity(event) {
  event.preventDefault();
  let searchCity = document.getElementById("search-input");
  let h1 = document.querySelector("h1");
  h1.innerHTML = searchCity.value;
}
function dateformat() {
  let date = new Date();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let currentDay = days[date.getDay()];
  let hours = date.getHours();
  let minutes = date.getMinutes();
  if (minutes > 10) {
    minutes = minutes;
  } else {
    minutes = `0${minutes}`;
  }

  return `${currentDay} ${hours}:${minutes}`;
}
let currentDateTimeClass = document.querySelector("#current-date-time");
let today = new Date();
currentDateTimeClass.innerHTML = dateformat(today);

let form = document.querySelector("#search-city-form");
form.addEventListener("submit", searchCity);
