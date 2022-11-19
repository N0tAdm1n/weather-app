import * as apiFuncs from "./apiFuncs";
import * as domFuncs from "./domFuncs";

const renderPage = async () => {
  const data = await apiFuncs.getWeatherData();
  domFuncs.displayWeatherDescription(data.weather[0].description);
};

renderPage();
