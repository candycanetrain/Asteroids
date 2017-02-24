//surrogate inheritance
Function.prototype.inherits = function(superClass) {
  // var Surrogate = function(){};
  function Surrogate() {}
  Surrogate.prototype = superClass.prototype;
  this.prototype = new Surrogate();
  // this.prototype = Surrogate.prototype; (this doesn't work b/c it's pointing to the same thing)
  this.prototype.constructor = this;
};

//object.create

Function.prototype.inherits2 = function(superClass) {
  this.prototype = Object.create(superClass.prototype);
  this.prototype.constructor = this;
};

function MovingObject (name) {
  this.name = name;
}

MovingObject.prototype.greet = function() {
  console.log("This is inherited!");
};

function Ship() {}
Ship.inherits2(MovingObject);

// function Asteroid () {}
// Asteroid.inherits(MovingObject);

let smallShip = new Ship();
console.log("Hi");
console.log(smallShip.greet());
