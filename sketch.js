let player;
let bullets = [];
let enemies = [];
let keys = {};
let score = 0;
let gameOver = false;
let reducedAnimations = false;

function setup() {
  createCanvas(800, 600);
  resetGame();
  
  // Button event listeners
  document.getElementById('animButton').addEventListener('click', () => {
    reducedAnimations = !reducedAnimations;
    document.getElementById('animButton').textContent = reducedAnimations ? 'Enable Animations' : 'Toggle Reduced Animations';
  });
  document.getElementById('restartButton').addEventListener('click', resetGame);
}

function resetGame() {
  player = new Player(width / 2, height / 2);
  bullets = [];
  enemies = [];
  score = 0;
  gameOver = false;
  document.getElementById('restartButton').style.display = 'none';
  // Spawn 5 enemies
  for (let i = 0; i < 5; i++) {
    let x = random(0, width);
    let y = random(0, height);
    let movementType = i % 2 === 0 ? 'direct' : 'zigzag';
    enemies.push(new Enemy(x, y, movementType));
  }
}

function draw() {
  background(220);
  
  if (!gameOver) {
    // Update and display player
    player.update();
    player.show(reducedAnimations);
    
    // Update and display bullets
    for (let i = bullets.length - 1; i >= 0; i--) {
      bullets[i].update();
      bullets[i].show();
      if (bullets[i].offscreen()) {
        bullets.splice(i, 1);
        continue;
      }
      // Check bullet-enemy collisions
      if (bullets[i].shooter === 'player') {
        for (let j = enemies.length - 1; j >= 0; j--) {
          if (bullets[i] && bullets[i].hits(enemies[j])) {
            enemies.splice(j, 1);
            bullets.splice(i, 1);
            score += 1;
            break;
          }
        }
      }
      // Check enemy bullet-player collisions
      if (bullets[i].shooter === 'enemy' && bullets[i].hits(player)) {
        player.hit();
        bullets.splice(i, 1);
      }
    }
    
    // Update and display enemies
    for (let enemy of enemies) {
      enemy.update(player.pos);
      enemy.show(reducedAnimations);
      // Enemy shoots every 180 frames (~3 seconds)
      if (frameCount % 180 === 0) {
        enemy.shoot(player.pos);
      }
    }
    
    // Check if player is dead
    if (player.health <= 0) {
      gameOver = true;
      document.getElementById('restartButton').style.display = 'block';
    }
  } else {
    // Game over screen
    textSize(32);
    fill(255, 0, 0);
    textAlign(CENTER);
    text("Game Over! Score: " + score, width / 2, height / 2);
  }
  
  // Display scoreboard
  textSize(20);
  fill(0);
  textAlign(LEFT);
  text("Score: " + score, 10, 30);
  text("Health: " + player.health, 10, 60);
}

function keyPressed() {
  if (!gameOver) {
    keys[keyCode] = true;
  }
}

function keyReleased() {
  keys[keyCode] = false;
}

function mousePressed() {
  if (!gameOver && mouseButton === LEFT) {
    player.shoot();
  }
}