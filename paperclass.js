class Paper{
constructor(){
  var options = {
     isStatic:false,
    density: 1.2,
      restitution: 0.3,
      friction: 0.5
  }
    this.body = Bodies.circle(80, 500,10,options)
    this.radius = 20;
    World.add(world,this.body)

}

display() {
  push();
  //translate(this.body.position.x, this.body.position.y);
    ellipseMode(CENTER);
    ellipse(this.body.position.x, this.body.position.y, this.radius)
    pop();
}

}