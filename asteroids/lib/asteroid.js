var MovingObject = require("./moving_object.js");
var Util = require("./util.js");

const DEFAULTS = {
  COLOR: "#505050",
  RADIUS: 7,
  SPEED: 20
};

class Asteroid {
  constructor(options = {}) {
    console.log("options:");
    console.log(options);
    options.color = DEFAULTS.COLOR;
    options.radius = DEFAULTS.RADIUS;
    options.vel = options.vel || Util.randomVec(DEFAULTS.SPEED);
  }
}

Util.inherits(Asteroid, MovingObject);
let ast = new Asteroid({pos : [10, 10]});
console.log(ast);
