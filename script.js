let swarm = [], bullets = [];
let player, boss = null;
let score = 0;
let gameState = "START";

let maxwellParams = {
  frequency: 0.05,
  amplitude: 20,
  wavelength: 60,
  speed: 1.5,
  phase: 0
};

let musicNodes = [
  { name: "Poison Sea", x: 120, y: 120, url: "#", unlocked: false, color: [0, 255, 255] },
  { name: "Heavy Saturation", x: 680, y: 140, url: "https://open.spotify.com/album/20l6UL9w17L5dL10ERto6B", unlocked: true, color: [255, 100, 0] },
  { name: "Journal Notes", x: 120, y: 480, url: "https://open.spotify.com/album/30HHx4sfGxBbEuGcdkk3Z6", unlocked: true, color: [255, 255, 0] }
];

function setup() {
  // Use the container dimensions to fill the background
  let container = document.getElementById('sketch-holder');
  let canvas = createCanvas(container.clientWidth, container.clientHeight);
  canvas.parent("sketch-holder");
  textFont('monospace');
  player = new Player();
  resetEnemies();
}

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
  if (score >= 120 && !boss) boss = new Boss();
  for (let e of swarm) {
    e.hunt(player);
    e.update();
    if (dist(e.pos.x, e.pos.y, player.pos.x, player.pos.y) < 30) score = max(0, score - 10);
  }
  if (boss) { boss.hunt(player); boss.update(); }
  for (let i = bullets.length - 1; i >= 0; i--) {
    let b = bullets[i];
    b.update();
    for (let e of swarm) {
      if (dist(b.pos.x, b.pos.y, e.pos.x, e.pos.y) < 25) { score += 10; e.respawn(); }
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
  fill(255); noStroke(); textAlign(LEFT, TOP); textSize(16);
  text("I Z Z I E", 20, 20);
  text("izziesounds", 20, 45);
  text("Score: " + score, 20, 70);
}

function drawStart() {
  fill(255); textAlign(CENTER, CENTER); textSize(64);
  text("I Z Z I E", width / 2, height / 2 - 40);
  textSize(16); fill(180); text("izziesounds", width / 2, height / 2);
  textSize(20); fill(255); text("POISON SEA // SPY SIGNAL ENTRY", width / 2, height / 2 + 40);
  textSize(14); fill(200); text("Click to Enter", width / 2, height / 2 + 80);
}

// ... Keep your Player, Enemy, Boss, Bullet, drawOcean, drawMusicNodes, and mousePressed functions as they were below this point.