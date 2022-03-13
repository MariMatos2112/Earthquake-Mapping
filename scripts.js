const canvas = document.querySelector("canvas");

let canvasWidth =  1024, canvasHeight = 512; mapMode = 'dark-v9', mapAngle = 0, mapZoom = 0, mapLagitute = 0, mapLongitude = 0

const settingUpCanvas = () => {
  canvas.width = canvasWidth;
  canvas.height = canvasHeight;

  canvas.style.backgroundImage = `url(https://api.mapbox.com/styles/v1/mapbox/${mapMode}/static/${mapLagitute},${mapLongitude},${mapZoom},0,${mapAngle}/${canvasWidth}x${canvasHeight}?access_token=pk.eyJ1IjoibWFyaS1hbm5lIiwiYSI6ImNsMG83amw3bTFuaTQzaWw0Z2w1dnN6ZzgifQ.hEw3XgEFt4h7msJ9C4mgAQ)`;
};

settingUpCanvas()