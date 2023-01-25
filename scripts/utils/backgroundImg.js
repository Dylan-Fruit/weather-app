export default function backgroundImg(description, icon) {
  // récupération des images, de l'élément HTML dans des constantes

  const cloudyBg = "./assets/cloudybg.jpg";
  const clearSky = "./assets/clearsky.png";
  const clearSkyNight = "./assets/clearskynight.png";
  const cloudyNightBg = "./assets/cloudynight.png";
  const drizzle = "./assets/drizzle.png";
  const drizzleNight = "./assets/drizzlenight.png";
  const mistBg = "./assets/mistbg.png";
  const mistNight = "./assets/mistnight.png";
  const weatherAppBg = document.querySelector(".weather");

  // Switch avec les différents cas de météos ainsi que le jour et la nuit qui affichent une image de fond en conséquence

  switch (icon) {
    case "50d":
      weatherAppBg.style.background = `url(${mistBg}) no-repeat`;
      break;
    case "50n":
      weatherAppBg.style.background = `url(${mistNight}) no-repeat`;
      break;
    case "10d":
      weatherAppBg.style.background = `url(${drizzle}) no-repeat`;
      break;
    case "10n":
      weatherAppBg.style.background = `url(${drizzleNight}) no-repeat`;
      break;
    case "01n":
      weatherAppBg.style.background = `url(${clearSkyNight}) no-repeat`;
      break;
    case "01d":
      weatherAppBg.style.background = `url(${clearSky}) no-repeat`;
      break;
    case "04n":
      weatherAppBg.style.background = `url(${cloudyNightBg}) no-repeat`;
      break;
    case "04d":
      weatherAppBg.style.background = `url(${cloudyBg}) no-repeat`;
      break;
    case "03n":
      weatherAppBg.style.background = `url(${cloudyNightBg}) no-repeat`;
      break;
    case "03d":
      weatherAppBg.style.background = `url(${cloudyBg} no-repeat)`;
    default:
      weatherAppBg.style.background = "#000";
  }
}
