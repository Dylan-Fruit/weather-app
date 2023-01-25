export default function backgroundImg(description, icon, assets) {
  // récupération des images, de l'élément HTML dans des constantes
  const weatherAppBg = document.querySelector(".weather");

  // Switch avec les différents cas de météos ainsi que le jour et la nuit qui affichent une image de fond en conséquence

  switch (icon) {
    case "01d":
      weatherAppBg.style.background = `url(${assets.clearSky}) no-repeat`;
      break;
    case "01n":
      weatherAppBg.style.background = `url(${assets.clearSkyNight}) no-repeat`;
      break;
    case "02d":
      weatherAppBg.style.background = `url(${assets.cloudyBg}) no-repeat`;
      break;
    case "02n":
      weatherAppBg.style.background = `url(${assets.cloudyNightBg}) no-repeat`;
      break;
    case "03d":
      weatherAppBg.style.background = `url(${assets.cloudyBg}) no-repeat`;
      break;
    case "03n":
      weatherAppBg.style.background = `url(${assets.cloudyNightBg}) no-repeat`;
      break;
    case "04d":
      weatherAppBg.style.background = `url(${assets.cloudyBg}) no-repeat`;
      break;
    case "04n":
      weatherAppBg.style.background = `url(${assets.cloudyNightBg}) no-repeat`;
      break;
    case "09d":
      weatherAppBg.style.background = `url(${assets.drizzle}) no-repeat`;
      break;
    case "09n":
      weatherAppBg.style.background = `url(${assets.drizzleNight}) no-repeat`;
      break;
    case "10d":
      weatherAppBg.style.background = `url(${assets.drizzle}) no-repeat`;
      break;
    case "10n":
      weatherAppBg.style.background = `url(${assets.drizzleNight}) no-repeat`;
      break;
    case "11n":
      weatherAppBg.style.background = `url(${assets.thunderstormNight} no-repeat)`;
      break;
    case "11d":
      weatherAppBg.style.background = `url(${assets.thunderstorm} no-repeat)`;
      break;
    case "13d":
      weatherAppBg.style.background = `url(${assets.snowDay}) no-repeat`;
      break;
    case "13n":
      weatherAppBg.style.background = `url(${assets.snowNight}) no-repeat`;
      break;
    case "50d":
      weatherAppBg.style.background = `url(${assets.mistBg}) no-repeat`;
      break;
    case "50n":
      weatherAppBg.style.background = `url(${assets.mistNight}) no-repeat`;
      break;
    default:
      weatherAppBg.style.background = "#000";
  }
}
