'use strict';

var arr = [1, 2, 3, 4];

var arr2 = arr.map((num) => num * 2);

console.log(arr2);

function Cat() {
	this.sound = 'Meo Meo';

	setTimeout((function()) {
		console.log('Cat smile: ', this.sound);
	}, 1000);

	// arrow syntax
	setTimeout(() => console.log('Cat smile: ', this.sound), 1000);
}

var cat = new Cat();

var f = () => { 'use strict'; return this; };
f() === window; //return true

var f2 = function(){ 'use strict'; return this; };
f2() === window; // return false


var adder = {
  base: 1,

  add: function(a) {
    var f = v => v + this.base;
    return f(a);
  },

  addThruCall: function(a) {
    var f = v => v + this.base;
    var b = {
      base: 2
    };

    return f.call(b, a);
  },

  addThruCall2: function(a) {
    var f = fucntion(v) {return v + this.base};//can apply this with normal fucntion
    var b = {
      base: 2
    };

    return f.call(b, a);
  }
};

console.log(adder.add(1));         // This would log to 2
console.log(adder.addThruCall(1)); // This would log to 2 still
console.log(adder.addThruCall2(1)); // This would log to 3

var obj = {
  a: 10
};

Object.defineProperty(obj, 'b', {
  get: () => {
    console.log(this.a, typeof this.a, this);
    //this is global object window
    return this.a + 10;
  }
});
//=================== Class examples ===================
class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }

  get area() {
    return this.calcArea();
  }

  calcArea() {
    return this.height * this.width;
  }

  static calPerimeter(width, height) {
  	return (height + width) * 2;
  }

}

const square = new Rectangle(10, 10);

console.log(square.area);
console.log(Rectangle.calPerimeter(3, 4));

class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(this.name + ' makes a noise.');
  }
}

class Dog extends Animal {
  // speak() {
  //   console.log(this.name + ' barks.');
  // }
  constructor(name, type) {
  	super(name);
  	this.type = type;
  }

  run() {
    console.log(this.name + ' runing');
  }

}

var dog = new Dog('Mitzie');
dog.speak(); // Mitzie barks.