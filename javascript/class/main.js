// 클래스

// 자바스크립트는 원래 prototype 언어
// => 클래스 방식을 사용할 수 있게 됨 !

// -------------------------------------

// prototype
// => 인스턴스(instance)에서 쓸 수 있는 별도의 속tjd or 메소드를 등록하는 객체
// => 객체가 만들어지기 위해서는 자신을 만드는 데 사용된 원형인 프로토타입 객체를 이용함

// const fruits = ["Apple", "Banana", "Cherry"];
const fruits = new Array("Apple", "Banana", "Cherry"); // 배열 데이터

console.log(fruits);
console.log(fruits.length);
console.log(fruits.includes("Banana")); // true
console.log(fruits.includes("Orange")); // true

// dragong이라는 배열데이터의 prototype 함수 생성
Array.prototype.dragong = function () {
  console.log(this);
};

fruits.dragong();

// const dragong = {
//   firstName: "Dragong",
//   lastName: "Hong",
//   getFullName: function () {
//     return `${this.firstName} ${this.lastName}`;
//   },
// };

// const neo = {
//   firstName: "Neo",
//   lastName: "Anderson",
// };

// console.log(dragong.getFullName());
// console.log(dragong.getFullName.call(neo)); // neo객체에서 dragong의 함수 사용

function User(first, last) {
  this.firstName = first;
  this.lastName = last;
}

// 반드시 <일반함수>로 생성 !!
User.prototype.getFullName = function () {
  return `${this.firstName} ${this.lastName}`;
};

// new 라는 키워드로 호출하는 함수 : 생성자 함수
const dragong = new User("Dragong", "Hong");
const neo = new User("Neo", "Anderson");

console.log(dragong);
console.log(neo);

console.log(dragong.getFullName());

// -------------------------------------

// Calsses => ES6부터

class User2 {
  constructor(first, last) {
    this.firstName = first;
    this.lastName = last;
  }
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

const dragong2 = new User2("Dragong", "Hong");
const neo2 = new User2("Neo", "Anderson");

console.log(dragong2);
console.log(neo2.getFullName());

// -------------------------------------

// Getter & Setter
// => 속성처럼 사용 함

// => Getter : 값을 얻을 때, 사용
// => Setter : 값을 지정할 때, 사용

class User3 {
  constructor(first, last) {
    this.firstName = first;
    this.lastName = last;
    // this.fullName = `${first} ${last}`;
    // 생성자 함수로 최초 호출 할 때만 만들어짐
  }
  // Getter함수
  get fullName() {
    console.log("Getting Full Name  !");
    return `${this.firstName} ${this.lastName}`;
  }
  // Setter 함수
  set fullName(value) {
    // console.log(value.split(" "));
    [this.firstName, this.lastName] = value.split(" ");
    // 들어온 값을 나눠서 배열로 만든 후, 각각의 값에 대입
  }
}

const dragong3 = new User3("Dragong", "Hong");

console.log(dragong3.fullName);

dragong3.fullName = "neo Anderson";

console.log(dragong3);

// -------------------------------------

// 정적 메소드 (Static methods)
// => 클래스에서만 사용 가능
// => 인스턴스에서 사용 x (데이터 구조 확인하는 정도의 보조메서드)

class User4 {
  constructor(first, last) {
    this.firstName = first;
    this.lastName = last;
  }
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  // 정적 메소드
  static isUser(user) {
    if (user.firstName && user.lastName) {
      return true;
    }
    return false;
  }
}

const dragong4 = new User4("Dragong", "Hong");
const neo4 = new User4("Neo", "Anderson");
const lewis = {
  name: "Lewis Yang",
  age: 85,
};

console.log(User4.isUser(dragong4)); // true
console.log(User4.isUser(lewis)); // false

// -------------------------------------

// 상속 (Inheritance)

class Vehicle {
  constructor(acceleration = 1) {
    this.speed = 0;
    this.acceleration = acceleration;
  }
  accelerate() {
    this.speed += this.acceleration;
  }
  decelerate() {
    if (this.spped <= 0) {
      console.log("정지");
      return;
    }
    this.speed -= this.acceleration;
  }
}

// Bicycle 클래스가 Vehicle 클래스를 상속
class Bicycle extends Vehicle {
  constructor(price = 100, acceleration) {
    // Vehicle 클래스의 acceleration 내용을 상속받음
    super(acceleration);
    this.price = price;
    this.wheel = 2;
  }
}

const bicycle = new Bicycle(300, 2);
console.log(bicycle);

// A instanceof B
// => A가 B class로부터 만들어진 instance 인가?
console.log(bicycle instanceof Bicycle); // true
console.log(bicycle instanceof Vehicle); // true => 상속받았으므로

// Bicycle 클래스 상속
class Car extends Bicycle {
  constructor(license, price, acceleration) {
    super(price, acceleration);
    this.license = license;
    this.wheel = 4;
  }
  // 오버라이딩 (Overriding) : accelerate 함수 재정의
  accelerate() {
    if (!this.license) {
      console.error("무면허!");
      return;
    }
    this.speed += this.acceleration;
    console.log("가속", this.speed);
  }
}

const carA = new Car(true, 7000, 10);
const carB = new Car(false, 4000, 6);

carA.accelerate();
carA.accelerate();

carB.accelerate();

console.log(carA, carB);

class Boat extends Vehicle {
  constructor(price, acceleration) {
    super(acceleration);
    this.price = price;
    this.motor = 1;
  }
}

const boat = new Boat(10000, 5);
console.log(boat);

// -------------------------------------

// instanceof

class A {
  constructor() {}
}

class B extends A {
  constructor() {
    super();
  }
}

class C extends B {
  constructor() {
    super();
  }
}

const a = new A();
const b = new B();
const c = new C();

console.log(a instanceof A); // true
console.log(a instanceof B); // false
console.log(a instanceof C); // false

console.log(b instanceof A); // true
console.log(b instanceof B); // true
console.log(b instanceof C); // false

console.log(c instanceof A); // true
console.log(c instanceof B); // true
console.log(c instanceof C); // true

// constructor
// => 정확하게 해당 인스턴스가 어디서 왔는지 알고 싶을 때 !
// => constructor를 일치 연산자를 사용해 비교

console.log(c.constructor === A); // false
console.log(c.constructor === B); // false
console.log(c.constructor === C); // true

const fruits2 = ["Apple", "Banana"];
console.log(fruits2.constructor === Array); // true
console.log(fruits2 instanceof Array); // true
