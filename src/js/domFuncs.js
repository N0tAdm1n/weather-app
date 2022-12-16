import * as utilFuncs from "./utilFuncs";

const body = document.querySelector("body");
const cityName = document.querySelector("#city_name");
const dateTime = document.querySelector("#date_time");
const currentTemp = document.querySelector("#current_temp");
const weatherDescription = document.querySelector("#weather_description");
// const humidity = document.querySelector("#humidity");
// const windSpeed = document.querySelector("#wind_speed");
const weatherBGImage = document.querySelector("#background_img");

//TODO: add a function to dynamically change the margin-left in #curret_temp_wrapper
//
//functions

// update the weather in the main section
function updateMainWeather(data) {
  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let time12hrs = utilFuncs.convertTo12hrs(`${hours}:${minutes}`);

  cityName.textContent = data.name;
  dateTime.textContent = time12hrs;
  currentTemp.textContent = Math.round(data.main.feels_like);
  weatherDescription.textContent = data.weather[0].description;
  // humidity.textContent = data.main.humidity.value;
  // windSpeed.textContent = data.wind.speed;
  weatherBGImage.src = utilFuncs.getWeatherStatusBG(data.weather[0].main);
}

export { updateMainWeather };
