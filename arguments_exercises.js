// Know how to use arguments and the ... rest operator
// Be able to set the context of a function in multiple ways
// Be able to write currying functions
// Be able to explain how currying works
// Know how to combine arguments from different calls of a curried function

// function sum() {
//   let total = 0;
//   // let numbers = arguments;
//   let numbers = Array.from(arguments);
//   numbers.forEach((number) => {
//     total += number;
//   });
//   return total;
// }
//
// function sum2(...args) {
//   let total = 0;
//   args.forEach((number) => {
//     total += number;
//   });
//   return total;
// }

// console.log(sum(3,4,5));
// console.log(sum2(3,4,5));

//myBind using args
Function.prototype.myBind = function (ctx) {
  let bindArgs = Array.from(arguments).slice(1);
  // let bindArgs = Array.from(arguments);
  let fn = this;
  return function() {
    let callArgs = Array.from(arguments);
    fn.apply(ctx, bindArgs.concat(callArgs));
  };
};

//myBind using rest operator (...)
Function.prototype.myBind = function (ctx, ...args) {
  let fn = this;
  let bindArgs = args;

  return function(...args) {
    let callArgs = args;
    fn.apply(ctx, bindArgs.concat(callArgs));
  };
};

// class Cat {
//   constructor(name) {
//     this.name = name;
//   }
//
//   says(sound, person) {
//     console.log(`${this.name} says ${sound} to ${person}!`);
//     return true;
//   }
// }
//
// const markov = new Cat("Markov");
// const breakfast = new Cat("Breakfast");
//
// // markov.says("meow", "Ned");
// // Markov says meow to Ned!
// // true
//
// // bind time args are "meow" and "Kush", no call time args
// markov.says.myBind(breakfast, "meow", "Kush")();
// // Breakfast says meow to Kush!
// // true
//
// // no bind time args (other than context), call time args are "meow" and "me"
// markov.says.myBind(breakfast)("meow", "a tree");
// // Breakfast says meow to a tree!
// // true
//
// // bind time arg is "meow", call time arg is "Markov"
// markov.says.myBind(breakfast, "meow")("Markov");
// // Breakfast says meow to Markov!
// // true
//
// // no bind time args (other than context), call time args are "meow" and "me"
// const notMarkovSays = markov.says.myBind(breakfast);
// notMarkovSays("meow", "me");
// // Breakfast says meow to me!
// // true

function curriedSum(numArgs) {
  let numbers = [];

  function _curriedSum(number) {
    numbers.push(number);
    if (numbers.length === numArgs) {
      let sum = 0;
      numbers.forEach(function(num) {
        sum += num;
      });

      return sum;
    } else {
      return _curriedSum;
    }
  }
  return _curriedSum;
}

// const sumD = curriedSum(4);
// console.log(sumD(5)(30)(20)(1));// => 56

//ES5 way below
Function.prototype.curry = function(numArgs) {
  let numbers = [];
  let fn = this;
  function _curriedSum(number) {
    numbers.push(number);
    if (numbers.length === numArgs) {
      return fn.apply(null, numbers);
    } else {
      return _curriedSum;
    }
  }
  return _curriedSum;
};
//ES6 way below
Function.prototype.curry2 = function(numArgs) {
  let numbers = [];
  let fn = this;
  function _curriedSum(number) {
    numbers.push(number);
    if (numbers.length === numArgs) {
      return fn(...numbers);
    } else {
      return _curriedSum;
    }
  }
  return _curriedSum;
};

function sumThree(num1, num2, num3) {
  return num1 + num2 + num3;
}
console.log(sumThree.curry(3)(4)(20)(6)); // == 30
console.log(sumThree.curry2(3)(4)(20)(6));
