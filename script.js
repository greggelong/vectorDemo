// global variables

let loc
let vel
let acc
let mymouse
function setup() {
  createCanvas(windowWidth, windowHeight);
    background(0,0,128);
    loc = createVector(width/2, height/5); // must be initalized here as they are p5
    vel = createVector(-2,2);
    acc = createVector(0,0.1); // this acc is gravity

}


function checkEdge(){
  // loc and vel are global, no need to pass
  if (loc.x <= 0 + (15) || loc.x >= width +(-15)){
    vel.x *= -1;
  }
  if (loc.y <= 0 || loc.y >= height - (25)){
    vel.y *= -1;
  }
}

function draw() {
  background(0,0,128,15);
  fill(255,255,0);
  // follow the mouse
  if (mouseIsPressed){
    // turn mouse's pos into a vector
    mymouse = createVector(mouseX, mouseY);
    // get a path from bll loc to mouse by subtracting
    mymouse.sub(loc);  // sub locacation
    // that path is the acc to add to the velocity and then to location
    mymouse.setMag(0.5);
    acc = mymouse
     
    vel.add(acc);
    vel.limit(4);
    loc.add(vel);
     

  } else{
    // net to reset constant acceleration
    acc.x = 0
    acc.y = 0.1
    vel.add(acc);
    loc.add(vel);
    loc.y = constrain(loc.y, 0, height-25) //to keep the ball on screen 
  }

  
  checkEdge();
  
  //vel.limit(2);
  print(vel.y, acc.y);


  
  ellipse(loc.x, loc.y, 25, 25);
  


}