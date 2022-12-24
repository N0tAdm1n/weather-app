import * as utilFuncs from "./utilFuncs";
import Sunny from "/home/n0tadm1n/repos/weather-app/src/images/sunshine.png";

const body = document.querySelector("body");
const cityName = document.querySelector("#city_name");
const dateTime = document.querySelector("#date_time");
const currentTemp = document.querySelector("#current_temp");
const weatherDescription = document.querySelector("#weather_description");
// const humidity = document.querySelector("#humidity");
// const windSpeed = document.querySelector("#wind_speed");
const weatherBGImage = document.querySelector("#background_img");
const upcomingWeatherList = document.querySelectorAll(".upcoming_weather");

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

function updateUpcomingWeatherWraper(datedArray) {
  for (let i = 1; i <= 4; i++) {
    updateUpcomingWeather(upcomingWeatherList[i - 1], datedArray[i], i);
  }
}

function updateUpcomingWeather(upcomingWeather, weatherDataObj, index) {
  const day = upcomingWeather.querySelector(".day_name");
  const weatherDesc = upcomingWeather.querySelector(".weather_desc");
  const weatherIcon = upcomingWeather.querySelector(".weather_icon");
  const minMaxTemp = upcomingWeather.querySelector(".min_max_temp");

  let date = new Date();
  date.setDate(date.getDate() + index);
  day.textContent = `${date.getDate()}/${date.getMonth()}`;
  //
  weatherDesc.textContent = weatherDataObj.weatherDesc;

  weatherIcon.append(utilFuncs.getWeatherIcon(weatherDataObj.weatherDesc));

  let { minTemp, maxTemp } = utilFuncs.getMinMaxTemperature(
    weatherDataObj.tempArray
  );
  minMaxTemp.textContent = `${maxTemp}\u00B0/${minTemp}\u00B0`;
}

export { updateMainWeather, updateUpcomingWeatherWraper };
