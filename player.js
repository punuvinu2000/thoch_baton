class Player {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.vel = createVector(0, 0);
    this.angle = 0;
    this.speed = 5;
    this.jetpackForce = -0.5;
    this.gravity = 0.2;
    this.animFrame = 0;
    this.animTimer = 0;
    this.health = 3;
    this.r = 20;
    this.animColors = [
      [0, 0, 255],
      [0, 100, 255],
      [0, 200, 255]
    ];
  }
  
  update() {
    // Movement with arrow keys
    if (keys[LEFT_ARROW]) this.vel.x = -this.speed;
    else if (keys[RIGHT_ARROW]) this.vel.x = this.speed;
    else this.vel.x = 0;
    
    // Jetpack
    if (keys[UP_ARROW]) {
      this.vel.y += this.jetpackForce;
      this.animTimer += 0.2;
    } else {
      this.animTimer += 0.1;
    }
    
    // Apply gravity
    this.vel.y += this.gravity;
    
    // Update position
    this.pos.add(this.vel);
    
    // Constrain to canvas
    this.pos.x = constrain(this.pos.x, 0, width);
    this.pos.y = constrain(this.pos.y, 0, height);
    
    // Aiming
    this.angle = atan2(mouseY - this.pos.y, mouseX - this.pos.x);
    
    // Update animation
    if (this.animTimer > 1) {
      this.animFrame = (this.animFrame + 1) % this.animColors.length;
      this.animTimer = 0;
    }
  }
  
  show(reducedAnimations) {
    push();
    translate(this.pos.x, this.pos.y);
    rotate(this.angle);
    fill(reducedAnimations ? [0, 0, 255] : this.animColors[this.animFrame]);
    rect(-20, -10, 40, 20);
    pop();
  }
  
  shoot() {
    let bullet = new Bullet(this.pos.x, this.pos.y, this.angle, 'player');
    bullets.push(bullet);
  }
  
  hit() {
    this.health -= 1;
  }
}