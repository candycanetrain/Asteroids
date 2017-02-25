class MovingObject {
  constructor({color, vel, radius, pos}){
    this.pos = pos;
    this.vel = vel;
    this.radius = radius;
    this.color = color;
    this.centerX = pos[0];
    this.centerY = pos[1];
  }

  draw(ctx) {
    ctx.fillStyle = this.color;
    ctx.beginPath();

    ctx.arc(
      this.centerX,
      this.centerY,
      this.radius,
      0,
      2 * Math.PI,
      false
    );

    ctx.fill();
  }

  move(){
    this.pos = [this.pos[0] + this.vel[0], this.pos[1] + this.vel[1]];
  }
}

const mo = new MovingObject(
  { pos: [30, 30], vel: [10, 10], radius: 5, color: "#00FF00"}
);

// const ctx = canvasEl.getContext("2d");
// mo.draw(ctx);

mo.move();
console.log(mo.pos);
// console.log(mo.vel);
// console.log(mo.radius);
// console.log(mo.color);
// console.log(mo.centerX);
// console.log(mo.centerY);

module.exports = MovingObject;
