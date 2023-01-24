import backgroundImg from "./utils/backgroundImg.js";

const apikey = "6df86b310800c41f880ef52cfa61a84e";
const weatherAppBg = document.querySelector(".weather");
const cloudyBg = "./assets/cloudybg.jpg";
const clearSky = "./assets/clearsky.png";
const clearSkyNight = "./assets/clearskynight.png";
const cloudyNightBg = "./assets/cloudynight.png";
const weatherAppCity = document.querySelector(".weather-top-area-city");
const weatherAppTemp = document.querySelector(".weather-top-area-temp");
const weatherAppDesc = document.querySelector(".weather-top-area-description");
const search = document.querySelector(".weather-search-form-input");
const form = document.querySelector(".weather-search-form");

weatherAppBg.style.backgroundSize = "cover";

// fonction BackgroundImg avec un switch qui change le background en fonction du temps et du jour ou de la nuit

const apiCall = (city) => {
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric&lang=fr`;

  fetch(url)
    .then((res) => res.json())
    .then(({ name, main: { temp }, weather: [{ description, icon }] }) => {
      weatherAppCity.innerHTML = name;
      weatherAppTemp.innerHTML = Math.round(temp) + "°";
      weatherAppDesc.innerHTML =
        description.charAt(0).toUpperCase() + description.slice(1);
      backgroundImg(
        description,
        icon,
        weatherAppBg,
        cloudyBg,
        clearSky,
        clearSkyNight,
        cloudyNightBg
      );
    })
    .catch((error) => console.log("il y a une erreur" + error));
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let ville = search.value;
  apiCall(ville);
  search.value = "";
});

apiCall("Lille");
