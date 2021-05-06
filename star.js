// All the paths
let paths = [];
// Are we painting?
let painting = false;
// How long until the next circle
let next = 0;
// Where are we now and where were we?
let current;
let previous;

let button;

function setup() {
  createCanvas(windowWidth, windowHeight);
  button = createButton("Start Over");
  button.position(1200,770);
  button.size(80,35);
  button.mouseClicked(startover);
  current = createVector(0,0);
  previous = createVector(0,0);

  input = createInput();
  input.position(1200, 725);
  input.size(400,30);

  greeting = createElement('h2', 'name your star!');
  greeting.position(1200, 670);

  textAlign(CENTER);
  textSize(50);

  button = createButton('submit');
  button.position(input.x + 420, 725);
  button.mousePressed(greet);
  button.size(80,35);
  

  function greet() {
  const name = input.value();
  greeting.html(name);
  input.value(''); 
}

}

function draw() {
 
    text()
    fill(500);
    stroke(500);

  
  // If it's time for a new point
  if (millis() > next && painting) {

    // Grab mouse position      
    current.x = mouseX;
    current.y = mouseY;

    // New particle's force is based on mouse movement
    let force = p5.Vector.sub(current, previous);
    force.mult(0.01);

    // Add new particle
    paths[paths.length - 1].add(current, force);
    
    // Schedule next circle
    next = millis() + random(300);

    // Store mouse values
    previous.x = current.x;
    previous.y = current.y;
  }
// Draw all paths
  for( let i = 0; i < paths.length; i++) {
    paths[i].update();
    paths[i].display();
  }
}


// Start it up
function mousePressed() {
  next = 0;
  painting = true;
  previous.x = mouseX;
  previous.y = mouseY;
  paths.push(new Path());
}

// Stop
function mouseReleased() {
  painting = false;
}
 

// A Path is a list of particles
class Path {
  constructor() {
    this.particles = [];
  }

  add(position, force) {
    // Add a new particle with a position, force, and hue
    this.particles.push(new Particle(position, force, this.hue));
  }
  
  // Display path
  update() {  
    for (let i = 0; i < this.particles.length; i++) {
      this.particles[i].update();
    }
  }  
// Display path 
  display() {    
    // Loop through backwards
    for (let i = this.particles.length - 1; i >= 0; i--) {
      // If we shold remove it
      if (this.particles[i].lifespan <= 0) {
        this.particles.splice(i, 1);
      // Otherwise, display it
      } else {
        this.particles[i].display(this.particles[i+1]);
      }
    }

  
  }  
}

// Particles along the path
class Particle {
  constructor(position, force, hue) {
    this.position = createVector(position.x, position.y);
    this.velocity = createVector(force.x, force.y);
    this.drag = 0;
  }

  update() {
    // Move it
    this.position.add(this.velocity);
    // Slow it down
    this.velocity.mult(this.drag);
  }

  // Draw particle and connect it with a line
  // Draw a line to another
  display(other) {    
    ellipse(this.position.x,this.position.y, 20, 20);    
    // If we need to draw a line
    if (other) {
      line(this.position.x, this.position.y, other.position.x, other.position.y);
    }
  }
}
function startover() {
//console.log("startover button working");
//clear();
window.location.reload();
}





/* document.addEventListener("keydown", function(e){
  console.log("This is the keydown event");
  console.log(e);
    if (event.key == "Backspace") {
      canvas.innerHTML = ""
    }
}); */