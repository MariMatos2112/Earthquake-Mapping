const canvas = document.querySelector("canvas");

let canvasWidth =  1024, canvasHeight = 512, mapMode = 'dark-v9', mapAngle = 0, mapZoom = 1, mapLagitute = 0, mapLongitude = 0
const cityLatitude = 31.2304;
const cityLongitude = 121.4737;

const degreesToRadians = (degrees) => degrees * (Math.PI / 180);

// Web Mercator Formulas
const webMercatorX = (longitude, zoom = mapZoom) => {
  longitude = degreesToRadians(longitude);

  let part1 = (128 / Math.PI) * Math.pow(2, zoom);
  let part2 = longitude + Math.PI;
  return part1 * part2;
}

const webMercatorY = (latitude, zoom = mapZoom) => {
  latitude = degreesToRadians(latitude);

  let part1 = (128 / Math.PI) * Math.pow(2, zoom);
  let part2 = Math.tan(Math.PI / 4 + latitude / 2);
  let part3 = Math.PI - Math.log(part2);
  return part1 * part3;
}

const settingUpCanvas = () => {
  const context = canvas.getContext('2d');

  canvas.width = canvasWidth;
  canvas.height = canvasHeight;

  context.translate(canvasWidth / 2, canvasHeight / 2);

  canvas.style.backgroundImage = `url(https://api.mapbox.com/styles/v1/mapbox/${mapMode}/static/${mapLagitute},${mapLongitude},${mapZoom},0,${mapAngle}/${canvasWidth}x${canvasHeight}?access_token=pk.eyJ1IjoibWFyaS1hbm5lIiwiYSI6ImNsMG83amw3bTFuaTQzaWw0Z2w1dnN6ZzgifQ.hEw3XgEFt4h7msJ9C4mgAQ)`;

  let mapCenterX = webMercatorX(0);
  let mapCenterY = webMercatorY(0);
  console.log(mapCenterX);
  console.log(mapCenterY);

  let mercatorX = webMercatorX(cityLongitude);
  let mercatorY = webMercatorY(cityLatitude);
  console.log(mercatorX);
  console.log(mercatorY);

  context.fillStyle = '#ff000066';
  context.ellipse(mercatorX, mercatorY, 5, 5, 0, 0, 2 * Math.PI);
  context.fill();
};

settingUpCanvas()

