let swarm = [], bullets = [];
let player, boss = null;
let score = 0;
let gameState = "START";

// ⚡ MAXWELL THEORY: Electromagnetic Wave Properties
// E = Electric Field, B = Magnetic Field, c = speed of light
// Wave equation: ∂²E/∂t² = c²∇²E (propagates through space)
let maxwellParams = {
  frequency: 0.05,        // Wave frequency (Hz)
  amplitude: 20,          // Wave amplitude
  wavelength: 60,         // Distance between peaks
  speed: 1.5,             // Propagation speed (c-normalized)
  phase: 0                // Current phase offset
};

// 🪐 MUSIC NODES (PLANETS)
let musicNodes = [
  {
    name: "Poison Sea",
    x: 120,
    y: 120,
    url: "#",
    unlocked: false,
    color: [0, 255, 255]
  },
  {
    name: "Heavy Saturation",
    x: 680,
    y: 140,
    url: "https://open.spotify.com/album/20l6UL9w17L5dL10ERto6B",
    unlocked: true,
    color: [255, 100, 0]
  },
  {
    name: "Journal Notes",
    x: 120,
    y: 480,
    url: "https://open.spotify.com/album/30HHx4sfGxBbEuGcdkk3Z6",
    unlocked: true,
    color: [255, 255, 0]
  }
];

function setup() {
  // Use the dimensions of the parent element, not fixed pixels
  let container = document.getElementById('sketch-holder');
  let canvas = createCanvas(container.clientWidth, container.clientHeight);
  canvas.parent("sketch-holder");
  textFont('monospace');
  player = new Player();
  resetEnemies();
}

// Ensure it updates when you stretch the window
function windowResized() {
  let container = document.getElementById('sketch-holder');
  resizeCanvas(container.clientWidth, container.clientHeight);
}

function draw() {
  drawOcean();

  if (gameState === "START") drawStart();
  else if (gameState === "PLAYING") {
    updateGame();
    renderGame();
    drawMusicNodes();
  }
}

function updateGame() {
  player.update();

  if (score >= 120 && !boss) {
    boss = new Boss();
  }

  for (let e of swarm) {
    e.hunt(player);
    e.update();

    // 📐 GEOMETRIC DISTANCE CALCULATION (Linear Algebra)
    let distanceToPlayer = dist(e.pos.x, e.pos.y, player.pos.x, player.pos.y);
    if (distanceToPlayer < 30) {
      score = max(0, score - 10);
    }
  }

  if (boss) {
    boss.hunt(player);
    boss.update();
  }

  for (let i = bullets.length - 1; i >= 0; i--) {
    let b = bullets[i];
    b.update();

    for (let e of swarm) {
      // Collision detection using distance geometry
      let bulletToEnemy = dist(b.pos.x, b.pos.y, e.pos.x, e.pos.y);
      if (bulletToEnemy < 25) {
        score += 10;
        e.respawn();
      }
    }

    if (boss) {
      // Boss hit detection with geometric radius
      let bulletToBoss = dist(b.pos.x, b.pos.y, boss.pos.x, boss.pos.y);
      if (bulletToBoss < 60) {
        boss.health--;

        if (boss.health <= 0) {
          score += 300;
          boss = null;
        }
      }
    }

    if (b.offscreen()) bullets.splice(i, 1);
  }
}

function renderGame() {
  player.show();

  for (let e of swarm) e.show();
  if (boss) boss.show();
  for (let b of bullets) b.show();

  fill(255);
  noStroke();
  textAlign(LEFT, TOP);
  textSize(16);
  text("I Z Z I E", 20, 20);
  text("izziesounds", 20, 45);
  text("Score: " + score, 20, 70);
  
  // 📐 GEOMETRIC CALCULATIONS: Distance, Height, Width
  // Linear Algebra: Vector operations
  let playerToMouse = p5.Vector.sub(createVector(mouseX, mouseY), player.pos);
  let distanceToMouse = playerToMouse.mag();
  let angleToMouse = playerToMouse.heading();
  
  // Canvas geometry
  let canvasWidth = width;
  let canvasHeight = height;
  
  // Player distance to edges (geometric constraints)
  let distToLeft = player.pos.x;
  let distToRight = canvasWidth - player.pos.x;
  let distToTop = player.pos.y;
  let distToBottom = canvasHeight - player.pos.y;
  
  fill(100, 255, 100);
  textSize(11);
  textAlign(LEFT, TOP);
  text(`Distance to cursor: ${distanceToMouse.toFixed(1)}px`, width - 220, 20);
  text(`Angle: ${(angleToMouse * 180 / PI).toFixed(1)}°`, width - 220, 38);
  text(`Canvas: ${canvasWidth}x${canvasHeight}`, width - 220, 56);
}

function drawMusicNodes() {
  for (let n of musicNodes) {
    let floatY = sin(frameCount * 0.05 + n.x) * 10;
    let y = n.y + floatY;
    let hover = dist(mouseX, mouseY, n.x, y) < 40;

    stroke(n.color);
    noFill();
    ellipse(n.x, y, 60);

    fill(n.color);
    noStroke();
    ellipse(n.x, y, hover ? 50 : 40);

    fill(255);
    textAlign(CENTER);
    textSize(12);
    text(n.name, n.x, y + 55);
  }
}

function mousePressed() {
  if (gameState === "START") {
    gameState = "PLAYING";
    return;
  }

  for (let n of musicNodes) {
    let y = n.y + sin(frameCount * 0.05 + n.x) * 10;

    if (dist(mouseX, mouseY, n.x, y) < 40) {
      if (n.unlocked) window.open(n.url, "_blank");
      return;
    }
  }

  bullets.push(new Bullet(player.pos.x, player.pos.y, mouseX, mouseY));
}

function drawOcean() {
  background(5, 0, 25);

  // ⚡ MAXWELL ELECTROMAGNETIC WAVE VISUALIZATION
  // Simulate propagating EM waves as sine patterns
  maxwellParams.phase += maxwellParams.frequency;
  
  for (let y = 0; y < height; y += 3) {
    // Electric field component (vertical oscillation)
    let electricField = sin(frameCount * maxwellParams.frequency + y * 0.03) * maxwellParams.amplitude;
    
    // Magnetic field component (perpendicular phase shift)
    let magneticField = cos(frameCount * maxwellParams.frequency + y * 0.05) * 10;
    
    // Combined wave intensity
    let waveIntensity = abs(electricField) / maxwellParams.amplitude;
    
    // Dynamic color based on wave intensity
    let r = 20 + electricField;
    let g = magneticField * 0.5;
    let b = 60 + electricField;
    
    stroke(r, g, b);
    line(0, y, width, y);
  }
  
  // Display Maxwell parameters on screen
  fill(100, 200, 255);
  textSize(10);
  textAlign(LEFT, TOP);
  text(`λ: ${maxwellParams.wavelength.toFixed(1)}px`, 10, 10);
  text(`ν: ${maxwellParams.frequency.toFixed(3)}`, 10, 25);
  text(`v: ${maxwellParams.speed.toFixed(2)}`, 10, 40);
}

function drawStart() {
  fill(255);
  textAlign(CENTER, CENTER);
  textSize(64);
  text("I Z Z Z E", width / 2, height / 2 - 40);

  textSize(16);
  fill(180);
  text("izziesounds", width / 2, height / 2);

  fill(255);
  textSize(20);
  text("POISON SEA // SPY SIGNAL ENTRY", width / 2, height / 2 + 40);

  textSize(14);
  fill(200);
  text("Click to Enter", width / 2, height / 2 + 80);
}

class Player {
  constructor() {
    this.pos = createVector(width / 2, height / 2);
    this.size = 15;  // Geometric property: player width/height
    this.angle = 0;  // Direction angle (linear algebra: rotation)
  }

  update() {
    this.pos.set(mouseX, mouseY);
    
    // 📐 LINEAR ALGEBRA: Calculate angle from center
    let center = createVector(width / 2, height / 2);
    let toMouse = p5.Vector.sub(this.pos, center);
    this.angle = toMouse.heading();
  }

  show() {
    push();
    translate(this.pos.x, this.pos.y);
    rotate(this.angle);
    fill(0, 255, 255);
    noStroke();
    triangle(12, 0, -10, -7, -10, 7);
    pop();
    
    // Display player size indicator
    fill(0, 200, 255);
    noStroke();
    ellipse(this.pos.x, this.pos.y, this.size);
  }
}

class Enemy {
  constructor() {
    this.respawn();
    this.size = 30;  // Geometric property: entity width/height
  }

  respawn() {
    this.pos = createVector(random(width), random(height));
    this.vel = p5.Vector.random2D();
  }

  hunt(target) {
    // 📐 LINEAR ALGEBRA: Vector subtraction and normalization
    let directionVector = p5.Vector.sub(target.pos, this.pos);
    let distanceToTarget = directionVector.mag();  // Geometric distance
    directionVector.setMag(1.2);  // Normalize and set speed
    this.vel.lerp(directionVector, 0.05);
  }

  update() {
    this.pos.add(this.vel);
  }

  show() {
    fill(180, 100, 255, 120);
    noStroke();
    ellipse(this.pos.x, this.pos.y, this.size);
    
    // Display geometric properties
    fill(150, 200, 255);
    textSize(8);
    textAlign(CENTER);
    text(this.size.toFixed(0), this.pos.x, this.pos.y);
  }
}

class Boss {
  constructor() {
    this.pos = createVector(width / 2, -50);
    this.health = 60;
    this.radius = 60;  // Geometric property: boss size/radius
  }

  hunt(target) {
    // 📐 LINEAR ALGEBRA: Vector direction from boss to target
    let directionVector = p5.Vector.sub(target.pos, this.pos);
    let distanceToTarget = directionVector.mag();
    directionVector.setMag(1);  // Normalize
    this.pos.add(directionVector);
  }

  update() {}

  show() {
    fill(255, 0, 150);
    ellipse(this.pos.x, this.pos.y, this.radius * 2);

    fill(255);
    textAlign(CENTER);
    textSize(16);
    text("LABEL AGENT", this.pos.x, this.pos.y - 70);
    
    // Display boss geometric properties
    textSize(10);
    fill(100, 255, 255);
    text(`HP: ${this.health} | R: ${this.radius.toFixed(0)}`, this.pos.x, this.pos.y + 75);
  }
}

class Bullet {
  constructor(x, y, tx, ty) {
    this.pos = createVector(x, y);
    // 📐 LINEAR ALGEBRA: Vector from player to target
    let direction = p5.Vector.sub(createVector(tx, ty), this.pos);
    let distance = direction.mag();  // Geometric distance to target
    direction.setMag(10);  // Normalize and set speed
    this.vel = direction;
    this.distanceTraveled = 0;
    this.maxDistance = 1000;  // Bullet lifetime: max distance
  }

  update() {
    this.pos.add(this.vel);
    this.distanceTraveled += this.vel.mag();
  }

  show() {
    fill(0, 255, 255);
    noStroke();
    ellipse(this.pos.x, this.pos.y, 6);
  }

  offscreen() {
    // Check boundaries (geometric constraints)
    return (
      this.pos.x < 0 ||
      this.pos.x > width ||
      this.pos.y < 0 ||
      this.pos.y > height ||
      this.distanceTraveled > this.maxDistance
    );
  }
}

function resetEnemies() {
  swarm = [];
  for (let i = 0; i < 10; i++) swarm.push(new Enemy());
}
