import backgroundImg from "./utils/backgroundImg.js";

const apikey = "6df86b310800c41f880ef52cfa61a84e";
const weatherAppBg = document.querySelector(".weather");
const assets = {
  cloudyBg: "./assets/cloudybg.jpg",
  clearSky: "./assets/clearsky.png",
  clearSkyNight: "./assets/clearskynight.png",
  cloudyNightBg: "./assets/cloudynight.png",
  drizzle: "./assets/drizzle.png",
  drizzleNight: "./assets/drizzlenight.png",
  mistBg: "./assets/mistbg.png",
  mistNight: "./assets/mistnight.png",
  thunderstorm: "./assets/thunderstorm.jpg",
  thunderstormNight: "./assets/thunderstormnight.jpg",
  snowDay: "./assets/snowday.png",
  snowNight: "./assets/snownight.png",
};
const loupeSearch = document.querySelector(".fa-magnifying-glass");
const cityInfo = document.querySelector(".weather-top-area-city");
const tempInfo = document.querySelector(".weather-top-area-temp");
const desc = document.querySelector(".weather-top-area-description");
const highestTemp = document.querySelector(
  ".weather-top-area-lowMax-highestTemp"
);
const lowestTemp = document.querySelector(
  ".weather-top-area-lowMax-lowestTemp"
);
const pressureInfo = document.querySelector(".weather-mid-area-pressure-text");
const feelsLike = document.querySelector(".weather-mid-area-feelsLike-text");
const humidityInfo = document.querySelector(".weather-mid-area-humidity-text");
const windInfo = document.querySelector(".weather-mid-area-wind-text");

weatherAppBg.style.backgroundSize = "cover";

// fonction BackgroundImg avec un switch qui change le background en fonction du temps et du jour ou de la nuit

const apiCall = (city) => {
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric&lang=fr`;

  fetch(url)
    .then((res) => res.json())
    .then(
      ({
        name,
        main: { temp, temp_min, temp_max, feels_like, humidity, pressure },
        weather: [{ description, icon }],
        wind: { speed },
      }) => {
        // Manipulation du DOM pour afficher les données reçues

        cityInfo.innerHTML = name;
        tempInfo.innerHTML = Math.round(temp) + "°";
        desc.innerHTML =
          description.charAt(0).toUpperCase() + description.slice(1);
        highestTemp.innerHTML = "Max: " + Math.round(temp_max) + " °";
        lowestTemp.innerHTML = "Min: " + Math.round(temp_min) + " °";
        pressureInfo.innerHTML = `<p>${pressure + " hPa"}</p>`;
        humidityInfo.innerHTML = `<p>${humidity + " %"}</p>`;
        feelsLike.innerHTML = `<p>${Math.round(feels_like) + " °"}</p>`;
        windInfo.innerHTML = `<p>${speed + " km/h"}</p>`;

        // Appel de la fonction qui affiche les images de fond

        backgroundImg(description, icon, assets);
      }
    )
    .catch((error) => console.log("il y a une erreur" + error));
};

// Écouteur d'évènement pour la soumission de la recherche via un form

const search = document.querySelector(".weather-search-form-input");
const form = document.querySelector(".weather-search-form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let ville = search.value;
  apiCall(ville);
  search.value = "";
});

loupeSearch.addEventListener("click", (e) => {
  e.preventDefault();
  let ville = search.value;
  apiCall(ville);
  search.value = "";
});

apiCall("Lille");
