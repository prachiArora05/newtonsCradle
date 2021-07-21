class Bob {
  constructor(x, y, r) {
		this.x = x;
		this.y = y;
		this.r = r;
		this.body = Bodies.circle(this.x, this.y, (this.r)/2, {isStatic: false, restitution: 1, friction: 0, density: 0.8});
		World.add(world, this.body);
	}
	display() {
    var paperPos = this.body.position;
    push();
    translate(paperPos.x, paperPos.y);
    rectMode(CENTER);
    fill(255, 0, 255);
    ellipse(0, 0, this.r, this.r);
    pop();
  }
}