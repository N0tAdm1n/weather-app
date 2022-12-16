import * as apiFuncs from "./apiFuncs";
import * as domFuncs from "./domFuncs";
import "../style.css";

const renderPage = async () => {
  const data = await apiFuncs.getCurrentWeatherData();
  console.log(Math.round(data.main.feels_like));
  domFuncs.updateMainWeather(data);
};

renderPage();
