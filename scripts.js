const canvas = document.querySelector("canvas");

let canvasWidth = 400;
let canvasHeight = 400;

const settingUpCanvas = () => {
  canvas.width = canvasWidth;
  canvas.height = canvasHeight;

  canvas.style.backgroundImage = `url(https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/-122.4241,37.78,15.25,0,60/${canvasWidth}x${canvasHeight}?access_token=pk.eyJ1IjoibWFyaS1hbm5lIiwiYSI6ImNsMG83amw3bTFuaTQzaWw0Z2w1dnN6ZzgifQ.hEw3XgEFt4h7msJ9C4mgAQ)`;
};
