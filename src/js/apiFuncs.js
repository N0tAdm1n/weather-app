const getUrl = (cityName) => {
  return `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=7e8e0d0ed87de6d0cad1b65469377040`;
};

async function getWeatherData() {
  const response = await fetch(getUrl("Kanpur"));
  const data = await response.json();

  return data;
}

export { getWeatherData };
