const body = document.querySelector("body");

const weatherDescription = document.createElement("div");
weatherDescription.classList.add("weather-description");
body.append(weatherDescription);

//
//functions

const displayWeatherDescription = (description) => {
  weatherDescription.textContent = description;
};

export { displayWeatherDescription };
