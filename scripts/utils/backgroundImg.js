export default function backgroundImg(description, icon) {
  const cloudyBg = "./assets/cloudybg.jpg";
  const clearSky = "./assets/clearsky.png";
  const clearSkyNight = "./assets/clearskynight.png";
  const cloudyNightBg = "./assets/cloudynight.png";
  const weatherAppBg = document.querySelector(".weather");
  switch (description) {
    case "couvert":
      switch (icon) {
        case "04n":
          weatherAppBg.style.background = `url(${cloudyNightBg}) no-repeat`;
          break;
        case "04d":
          weatherAppBg.style.background = `url(${cloudyBg}) no-repeat`;
          break;
        default:
          weatherAppBg.style.background = "#000";
      }
      break;
    case "ciel dégagé":
      switch (icon) {
        case "01n":
          weatherAppBg.style.background = `url(${clearSkyNight}) no-repeat`;
          break;
        case "01d":
          weatherAppBg.style.background = `url(${clearSky}) no-repeat`;
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
}
