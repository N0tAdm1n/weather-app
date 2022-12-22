// convert 24hr format to 12hr
function convertTo12hrs(time24hrs) {
  let timeArray = time24hrs.split(":");
  let am_pm = "AM";
  let hours24hr = Number(timeArray[0]);
  let hours12hr;
  let minutes12hr;

  if (hours24hr > 12) {
    am_pm = "PM";
  }
  if (hours24hr == 0 || hours24hr == 12) {
    hours12hr = 12;
  } else {
    hours12hr = hours24hr % 12;
  }

  //add a 0 to minutes if less than 10
  if (Number(timeArray[1]) < 10) {
    minutes12hr = `0${timeArray[1]}`;
  } else {
    minutes12hr = `${timeArray[1]}`;
  }

  return `${hours12hr}:${minutes12hr} ${am_pm}`;
}

function getWeatherStatusBG(weatherMainStatus) {
  let url;
  switch (weatherMainStatus) {
    case "Thunderstorm":
      url =
        "https://images.unsplash.com/photo-1600377927594-ceae8f8981a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHRodW5kZXJzdG9ybXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60";
      break;
    case "Drizzle":
      url =
        "https://images.unsplash.com/photo-1506621754785-bd1ef3f75601?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NHw0MzcyMDkwfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60";
      break;
    case "Rain":
      url =
        "https://images.unsplash.com/photo-1534274988757-a28bf1a57c17?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cmFpbmluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60";
      break;
    case "Snow":
      url =
        "https://images.unsplash.com/photo-1521903146409-7165ad695b34?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHNub3dpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60";
      break;
    case "Clear":
      url =
        "https://images.unsplash.com/photo-1590077428593-a55bb07c4665?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGNsZWFyJTIwc2t5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60";
      break;
    case "Clouds":
      url =
        "https://images.unsplash.com/photo-1617150119111-09bbb85178b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGNsb3Vkc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60";
      break;
    default:
      url =
        "https://images.unsplash.com/photo-1619204715997-1367fe5812f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Zm9nZ3klMjBjaXR5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60";
  }

  return url;
}

function getDayFromFullDate(text) {
  let date = text.split(" ")[0];
  let day = date.split("-")[2];

  return Number(day);
}

function sortIntoDatedArray(data) {
  let datedArray = [];

  let currentDay = Number(new Date().getDate());
  for (let i = 0, tempArray = []; i < data.length; i++) {
    if (currentDay == getDayFromFullDate(data[i].dt_txt)) {
      tempArray.push(data[i].main.feels_like);
    } else {
      datedArray.push({
        date: currentDay,
        tempArray,
      });

      currentDay = getDayFromFullDate(data[i].dt_txt);
      tempArray = [];
      tempArray.push(data[i].main.feels_like);
    }
    if (i == data.length - 1) {
      datedArray.push({
        date: currentDay,
        tempArray,
      });
    }
  }

  return datedArray;
}

export { convertTo12hrs, getWeatherStatusBG, sortIntoDatedArray };
