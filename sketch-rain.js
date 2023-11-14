function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function setup() {
  let canvasS;
  canvasS = createCanvas(windowWidth, windowHeight);
  canvasS.position(0,0)
  canvasS.class("weatherDrawing")
}

function draw() {
  background(220, 220, 255);
}
