let a = 0;
let b = 0;
let c = 0;
let ctx;

function setup() {
  cnv = createCanvas(800, 800);
  cnv.mouseOver(changeLength);
  cnv.mouseOut(changeLengthBack);
  textSize(20);
  textAlign(CENTER, CENTER);
  
  ctx = cnv.drawingContext;
}

function draw() {
  background(125);
  
  fill(255, 0, 0);
  circle(mouseX, mouseY, 20);
  noCursor();

  frameRate(2);

  for (let i = 0; i < 16; i++) {
    //fill(a * 50, b * 30, c * 20);
    colorMode(HSB);
    fill(144, 0, 0);

    rect(width / 2 + 20 * a + c, height / 2 + 20 * b, 20, 20);
    rect(width / 2 + 20 * a + c - 100, height / 2 + 20 * b - 100, 20, 20);

    a++;

    if (a > 4) {
      a = 0;
      b++;
    }

    if (b > 4) {
      b = 0;
    }

    fill(140);
    circle(width / a - 100, height / b - 100, 30);
    noFill();

    circle(width / a, height / b, 4);
  }

  fill(255, 0, 0);
  //select('canvas').elt.style.letterSpacing = "4px";
  
  
  ctx.font = '15px monospace';
  text("Uncomfortable personal space", 467, 702);
}

function changeLength() {
  c = 40;
  select('canvas').elt.style.letterSpacing = "30px";
}
function changeLengthBack() {
  c = 0;
  select('canvas').elt.style.letterSpacing = "4px";
}


