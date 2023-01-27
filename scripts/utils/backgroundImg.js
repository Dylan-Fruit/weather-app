export default function backgroundImg(description, icon, assets) {
  // récupération des images, de l'élément HTML dans des constantes
  const weatherAppBg = document.querySelector(".weather");
  weatherAppBg.style.backgroundSize = "cover";

  // Switch avec les différents cas de météos ainsi que le jour et la nuit qui affichent une image de fond en conséquence

  switch (icon) {
    case "01d":
      weatherAppBg.style.background = `url(${assets.clearSky}) center no-repeat`;
      break;
    case "01n":
      weatherAppBg.style.background = `url(${assets.clearSkyNight}) center no-repeat`;
      break;
    case "02d":
      weatherAppBg.style.background = `url(${assets.cloudyBg}) center no-repeat`;
      break;
    case "02n":
      weatherAppBg.style.background = `url(${assets.cloudyNightBg}) center no-repeat`;
      break;
    case "03d":
      weatherAppBg.style.background = `url(${assets.cloudyBg}) center no-repeat`;
      break;
    case "03n":
      weatherAppBg.style.background = `url(${assets.cloudyNightBg}) center no-repeat`;
      break;
    case "04d":
      weatherAppBg.style.background = `url(${assets.cloudyBg}) center no-repeat`;
      break;
    case "04n":
      weatherAppBg.style.background = `url(${assets.cloudyNightBg}) center no-repeat`;
      break;
    case "09d":
      weatherAppBg.style.background = `url(${assets.showerRain}) center no-repeat`;
      break;
    case "09n":
      weatherAppBg.style.background = `url(${assets.showerRainNight}) center no-repeat`;
      break;
    case "10d":
      weatherAppBg.style.background = `url(${assets.drizzle}) center no-repeat`;
      break;
    case "10n":
      weatherAppBg.style.background = `url(${assets.drizzleNight}) center no-repeat`;
      break;
    case "11n":
      weatherAppBg.style.background = `url(${assets.thunderstormNight} center no-repeat)`;
      break;
    case "11d":
      weatherAppBg.style.background = `url(${assets.thunderstorm} center no-repeat)`;
      break;
    case "13d":
      weatherAppBg.style.background = `url(${assets.snowDay}) center no-repeat`;
      break;
    case "13n":
      weatherAppBg.style.background = `url(${assets.snowNight}) center no-repeat`;
      break;
    case "50d":
      weatherAppBg.style.background = `url(${assets.mistBg}) center no-repeat`;
      break;
    case "50n":
      weatherAppBg.style.background = `url(${assets.mistNight}) center no-repeat`;
      break;
    default:
      weatherAppBg.style.background = "#000";
  }
}
