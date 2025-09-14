let climb;
let ready;
let set;
let go;
let randomClimb = 0;

function preload() {
  climb = loadImage("imagen1.JPG");
  ready = loadImage("imagen2.JPG");
  set = loadImage("imagen3.JPG");
  go = loadImage("image4.JPG");
}

function setup() {
  createCanvas(700, 900);
}

function draw() {
  background(220);
  //option1
  if (randomClimb === 0) {
    image(climb, 0, 0, 700, 900);
    //option2
  } else if (randomClimb === 1) {
    image(ready, 0, 0, 700, 900);
    //option3
  } else if (randomClimb === 2) {
    image(set, 0, 0, 700, 900);
    //option4
  } else if (randomClimb === 3) {
    image(go, 0, 0, 700, 900);
  }
}

function keyPressed() {
  if (keyCode === LEFT_ARROW || keyCode === RIGHT_ARROW) {
    randomClimb = int(random(4));
    console.log(randomClimb);
  }
}
