let swarm = [], bullets = [];
let player, boss = null;
let score = 0;
let gameState = "START";

// 🪐 MUSIC NODES (PLANETS)
let musicNodes = [
  { name: "Poison Sea", x: 120, y: 120, url: "#", unlocked: false, color: [0, 255, 255] },
  { name: "Heavy Saturation", x: 680, y: 140, url: "https://open.spotify.com/album/20l6UL9w17L5dL10ERto6B", unlocked: true, color: [255, 100, 0] },
  { name: "Journal Notes", x: 120, y: 480, url: "https://open.spotify.com/album/30HHx4sfGxBbEuGcdkk3Z6", unlocked: true, color: [255, 255, 0] }
];

function setup() {
  const canvas = createCanvas(800, 600);
  canvas.parent('sketch-holder');
  textFont('monospace');
  player = new Player();
  resetEnemies();
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
  if (score >= 120 && !boss) boss = new Boss();
  for (let e of swarm) {
    e.hunt(player);
    e.update();
    if (dist(e.pos.x, e.pos.y, player.pos.x, player.pos.y) < 30) score = max(0, score - 10);
  }
  if (boss) {
    boss.hunt(player);
    boss.update();
  }
  for (let i = bullets.length - 1; i >= 0; i--) {
    let b = bullets[i];
    b.update();
    for (let e of swarm) {
      if (dist(b.pos.x, b.pos.y, e.pos.x, e.pos.y) < 25) {
        score += 10;
        e.respawn();
      }
    }
    if (boss && dist(b.pos.x, b.pos.y, boss.pos.x, boss.pos.y) < 60) {
      boss.health--;
      if (boss.health <= 0) { score += 300; boss = null; }
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
  if (gameState === "START") { gameState = "PLAYING"; return; }
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
  for (let y = 0; y < height; y += 3) {
    let wave = sin(frameCount * 0.02 + y * 0.03) * 20;
    stroke(20 + wave, 0, 60 + wave);
    line(0, y, width, y);
  }
}

function drawStart() {
  fill(255);
  textAlign(CENTER, CENTER);
  textSize(64);
  text("I Z Z I E", width / 2, height / 2 - 40);
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
  constructor() { this.pos = createVector(width / 2, height / 2); }
  update() { this.pos.set(mouseX, mouseY); }
  show() {
    push();
    translate(this.pos.x, this.pos.y);
    fill(0, 255, 255);
    noStroke();
    triangle(12, 0, -10, -7, -10, 7);
    pop();
  }
}

class Enemy {
  constructor() { this.respawn(); }
  respawn() { this.pos = createVector(random(width), random(height)); this.vel = p5.Vector.random2D(); }
  hunt(target) { let dir = p5.Vector.sub(target.pos, this.pos).setMag(1.2); this.vel.lerp(dir, 0.05); }
  update() { this.pos.add(this.vel); }
  show() { fill(180, 100, 255, 120); noStroke(); ellipse(this.pos.x, this.pos.y, 30); }
}

class Boss {
  constructor() { this.pos = createVector(width / 2, -50); this.health = 60; }
  hunt(target) { let dir = p5.Vector.sub(target.pos, this.pos).setMag(1); this.pos.add(dir); }
  update() {}
  show() {
    fill(255, 0, 150);
    ellipse(this.pos.x, this.pos.y, 120);
    fill(255);
    textAlign(CENTER);
    textSize(16);
    text("LABEL AGENT", this.pos.x, this.pos.y - 70);
  }
}

class Bullet {
  constructor(x, y, tx, ty) { this.pos = createVector(x, y); this.vel = p5.Vector.sub(createVector(tx, ty), this.pos).setMag(10); }
  update() { this.pos.add(this.vel); }
  show() { fill(0, 255, 255); noStroke(); ellipse(this.pos.x, this.pos.y, 6); }
  offscreen() { return (this.pos.x < 0 || this.pos.x > width || this.pos.y < 0 || this.pos.y > height); }
}

function resetEnemies() { swarm = []; for (let i = 0; i < 10; i++) swarm.push(new Enemy()); }