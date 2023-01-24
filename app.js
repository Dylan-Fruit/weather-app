const apikey = "6df86b310800c41f880ef52cfa61a84e";
const weatherAppBg = document.querySelector(".weather");
const weatherAppCity = document.querySelector(".weather-top-area-city");
const weatherAppTemp = document.querySelector(".weather-top-area-temp");
const cloudyBg = "./assets/cloudybg.jpg";
const cloudyNightBg = "./assets/cloudynight.jpg";
const search = document.querySelector(".weather-search-form-input");
const form = document.querySelector(".weather-search-form");

weatherAppBg.style.backgroundSize = "cover";

const backgroundImg = ({ description, icon }) => {
  switch (description) {
    case "couvert":
      switch (icon) {
        case "04n":
          weatherAppBg.style.background = `url(${cloudyNightBg}) no-repeat`;
          break;
        case "04d":
          weatherAppBg.style.weatherAppBg.style.background = `url(${cloudyBg}) no-repeat`;
          break;
        default:
          weatherAppBg.style.background = "#000";
      }
      break;
    case "légère pluie":
      weatherAppBg.style.background = `url(${cloudyBg}) no-repeat`;
      break;
    default:
      weatherAppBg.style.background = "none";
  }
};

const apiCall = (city) => {
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric&lang=fr`;

  fetch(url)
    .then((res) => res.json())
    .then(({ name, main: { temp }, weather: [{ description, icon }] }) => {
      weatherAppCity.innerHTML = name;
      weatherAppTemp.innerHTML = temp + " °";
      backgroundImg({ description, icon });
    })
    .catch((error) => console.log("il y a une erreur" + error));
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  apiCall(search.value);
});

apiCall("Lille");
