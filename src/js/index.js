import * as apiFuncs from "./apiFuncs";
import * as domFuncs from "./domFuncs";
import * as utilFuncs from "./utilFuncs";
import "../style.css";

const renderPage = async () => {
  const currentWeatherData = await apiFuncs.getCurrentWeatherData();
  domFuncs.updateMainWeather(currentWeatherData);

  const forecastWeatherData = await apiFuncs.getForecastData();
  const datedForecastWeatherArray = utilFuncs.sortIntoDatedArray(
    forecastWeatherData.list
  );
  domFuncs.updateUpcomingWeatherWraper(datedForecastWeatherArray);
};

renderPage();
