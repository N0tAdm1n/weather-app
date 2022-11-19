// function to get current weather of a city
async function getCurrentWeatherData(cityName) {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=7e8e0d0ed87de6d0cad1b65469377040`
  );
  const data = await response.json();

  return data;
}

// function to get weather forercast data for 5 days in 3hr intervals
async function getForecastData(cityName = "Kanpur") {
  const coordinates = await getCoordinates(cityName);

  const response = await fetch(
    `http://api.openweathermap.org/data/2.5/forecast?lat=${coordinates[0].lat}&lon=${coordinates[0].lon}&appid=7e8e0d0ed87de6d0cad1b65469377040`
  );
  const data = await response.json();

  console.log(data);
  return data;
}

// function to get the city geographical data(coordinates)
async function getCoordinates(cityName) {
  const response = await fetch(
    `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=7e8e0d0ed87de6d0cad1b65469377040`
  );
  return await response.json();
}

export { getCurrentWeatherData, getForecastData };
