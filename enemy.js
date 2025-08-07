class Enemy {
  constructor(x, y, movementType) {
    this.pos = createVector(x, y);
    this.r = 15;
    this.speed = 2;
    this.movementType = movementType;
    this.zigzagAngle = 0;
    this.animFrame = 0;
    this.animTimer = 0;
    this.animColors = [
      [255, 0, 0],
      [255, 100, 100],
      [255, 200, 200]
    ];
  }
  
  update(playerPos) {
    // Movement toward player
    let dir = p5.Vector.sub(playerPos, this.pos);
    
    if (this.movementType === 'direct') {
      dir.setMag(this.speed);
      this.pos.add(dir);
    } else if (this.movementType === 'zigzag') {
      this.zigzagAngle += 0.1;
      let zigzag = createVector(this.speed * cos(this.zigzagAngle), this.speed * sin(this.zigzagAngle));
      dir.setMag(this.speed * 0.5);
      this.pos.add(dir.add(zigzag));
    }
    
    // Update animation
    this.animTimer += 0.1;
    if (this.animTimer > 1) {
      this.animFrame = (this.animFrame + 1) % this.animColors.length;
      this.animTimer = 0;
    }
  }
  
  show(reducedAnimations) {
    push();
    translate(this.pos.x, this.pos.y);
    fill(reducedAnimations ? [255, 0, 0] : this.animColors[this.animFrame]);
    rect(-15, -15, 30, 30);
    pop();
  }
  
  shoot(playerPos) {
    let angle = atan2(playerPos.y - this.pos.y, playerPos.x - this.pos.x);
    let bullet = new Bullet(this.pos.x, this.pos.y, angle, 'enemy');
    bullets.push(bullet);
  }
}