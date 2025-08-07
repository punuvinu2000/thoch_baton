class Bullet {
  constructor(x, y, angle, shooter) {
    this.pos = createVector(x, y);
    this.vel = p5.Vector.fromAngle(angle).mult(10);
    this.r = 5;
    this.shooter = shooter;
  }
  
  update() {
    this.pos.add(this.vel);
  }
  
  show() {
    push();
    translate(this.pos.x, this.pos.y);
    fill(this.shooter === 'player' ? [255, 0, 0] : [0, 255, 0]);
    ellipse(0, 0, 10, 10);
    pop();
  }
  
  offscreen() {
    return (this.pos.x < 0 || this.pos.x > width || this.pos.y < 0 || this.pos.y > height);
  }
  
  hits(target) {
    let d = dist(this.pos.x, this.pos.y, target.pos.x, target.pos.y);
    return d < this.r + target.r;
  }
}