var angle = 0;
var offset = 250;
var scalar = 0;
var speed = 0.25;

function setup() {
createCanvas(500, 500);
colorMode(HSB, 260, 100, 100, 100);
background (120, 25, 70, 100);
}

function draw() {
var x = offset + cos(angle) * scalar;
var y = offset + sin(angle) * scalar;
var a = 90;
while (a < 70) {
fill(a, 20, 50);
a= a+3; }
noStroke();
ellipse(x, y, 6, 6);
angle += speed;
scalar += speed;
}