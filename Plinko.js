class Plinko {
    constructor(x, y, r) {
      var options = {
          'restitution':0.8,
          'friction':1,
          'density':1.0
      }
      this.body = Bodies.circle(x, y, r, options);
      this.r = 10
      this.x = x
      this.y = y
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      angleMode(RADIANS)
      rectMode(CENTER);
      fill("Red");
      rect(0, 0, this.width, this.height);
      pop();
    }
  };
  