let vader;
let hottub;

function preload() {
  vader = loadImage(
    "https://raw.githubusercontent.com/NautilusIRL/ct20/refs/heads/main/darth%20vader%20profile%20png.png"
  );
  hottub = loadImage(
    "https://raw.githubusercontent.com/NautilusIRL/ct20/refs/heads/main/hot%20tub.png"
  );
}

function setup() {
  createCanvas(1000, 1000);
}

function draw() {
  background("navy");
  image(hottub,0,0,720,380)
 
  fill("skyblue");
  textFont();
  textSize(20);
  strokeWeight(2);
  stroke("black");
  text("Darth Vader has been judging you for approximately " + minute() +" minutes and "+ second() +" seconds",50,410);
  image(vader, mouseX - 100, mouseY-100, 200, 200);
  noCursor()

}
