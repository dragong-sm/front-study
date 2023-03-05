// 문자 : String

const string1 = "Dragong";
// 백틱사용 - Tempate Literal (어떠한 기호를 통해 데이터를 만드는 방식)
const string2 = `Hello ${string1} ?!`;
console.log(string2);

// -----------------------------------------------

// 숫자 : Number

const number1 = 123;
// 음수 가능
const number2 = -123;
const pi = 0.14;
console.log(number1, number2);
console.log(pi);

console.log(number1 + undefined);
// NaN : Not a Number 숫자타입인데, 숫자가 아님
console.log(typeof (number1 + undefined)); //Number

const a = 0.1;
const b = 0.2;
console.log(a + b); // 0.30000000000000004
console.log(Number((a + b).toFixed(1)));
// toFixed
// => 숫자데이터를 원하는 소숫점만큼 잘라서 문자데이터로 바꿈
// => 따라서 number 타입으로 변경 필요

// --------------------------------------------

// Boolean (논리)

const a1 = true;
const b1 = false;

if (b1) {
  console.log("HELLO", b1);
} else {
  console.log("HELLO", a1);
}

// --------------------------------------------

// null : 명시적으로 값이 없음을 표시하기 위해 null 할당
let age = null;
console.log(age);

setTimeout(function () {
  age = 85;
  console.log(age);
}, 1000); // 1초 뒤에 값 부여

// --------------------------------------------

// undefined : 암시적으로 값이 없음 (아무런 값이 할당 되지 않음)

let age1;
console.log(age1); // undefined

// 객체 데이터
const user = {
  name: "Dragong",
  age: 85,
  address: null,
};

console.log(user.name);
console.log(user.email); // undefined : user 객체에 email이 없는데, 값을 참조하려 함
console.log(user.address); // null : 아직 값이 할당되지 않음 ! 할당될 수 있다

// --------------------------------------------

// 배열 : Array

// const fruits = new Array("Apple", "Banana", "Cherry");

// Array Literal
const fruits = ["Apple", "Banana", "Cherry"];

console.log(fruits);
console.log(fruits[2]); // Cherry
console.log(fruits.length);

// --------------------------------------------

// 객체 : Object
// 속성의 이름(key)는 고유 !

// 생성자 함수 방식
// const user1 = new Object();

// user1.name = "Dragong";
// user1.age = 85;

// 생성자 함수 방식
// function User() {
//   this.name = "Dragong";
//   this.age = 85;
// }
// const user2 = new User();

// Object Literal 방식
const userl = {
  name: "Dragong",
  age: 85,
};

const key = "age";

console.log(userl);
console.log(userl["name"]);
console.log(key);

const userA = {
  name: "Dragong",
  age: 85,
};

const userB = {
  name: "Neo",
  age: 22,
  parent: userA,
};

console.log(userB.parent.name); //Dragong

const users = [userA, userB];

console.log(users[0].name); // Dragong

// --------------------------------------------

// 함수데이터 : function

function hello() {
  console.log("Hello !!");
}

// 함수 호출 => () 붙여주기 !
hello();

function getNumber() {
  return 123;
}

// 함수 자체 값
getNumber;

console.log(typeof getNumber); // function
console.log(typeof getNumber()); // number : 123

// 익명함수
const getNumber2 = function () {
  return 123;
};

console.log(typeof getNumber2);
console.log(getNumber2());

// 함수의 호출 => 함수에서 반환하는 값

const a2 = function () {
  console.log("A");
};

// c는 매개변수
const b2 = function (c) {
  console.log(c);
  // 매개변수 호출 => 여기서는 함수 a2
  c();
};

b2(a2);

// -------------------------------------------

// 형변환 (type Conversion)

const a3 = 1; // Number
const b3 = "1"; // String

// === : ** 일치 연산자  ( 값 & 형 비교 )
console.log(a3 === b3); // false

// == : 동등 연산자 => 형 변환이 일어남 ( 값만 비교 )
console.log(a3 == b3); // true

// -------------------------------------------

// 참과 거짓 ( Truthy & Falsy )

// Falsy
//  => false, 0, null, undefined, NaN, "", -0, 0n

// Truthy
//  => Falsy 외의 data

if (false) {
  // falsy
  console.log("참 !");
}

// truthy
if (123) {
  console.log("참 !");
}

if (0) {
  // falsy
  console.log("참 !");
} else if ("0") {
  //truthy
  console.log("참 !");
}

const fruits2 = ["Apple", "Banana"];

if (fruits2) {
  // truthy
  console.log("아이템 있음");
}

const noFruit = [];

if (noFruit.length) {
  // noFruit.length(길이)가 0이므로 falsy
  console.log("아이템있음");
} else {
  console.log("아이템없음");
}

// -------------------------------------------

// 데이터 타입 확인

const a4 = 123;

console.log(typeof a4);

console.log(typeof "Hello" === "string"); // true
console.log(typeof 123 === "number"); //true
console.log(typeof undefined === "undefined"); // true

console.log(function () {} === "function"); // true

// null, [배열], {객체}는 모두 object 여서 true로,,, 구분 어렵!
console.log(typeof null === "object"); // true
console.log(typeof [] === "object"); // true
console.log(typeof {} === "object"); // true

// [배열] 과 {객체} 데이처는 constructor를 이용하여 구분
console.log([].constructor === Array); // true
console.log({}.constructor === Object); // true

// null 데이터 확인 ! ( 다른 데이터도 확인 가능)
console.log(Object.prototype.toString.call(null)); // [object Null]
console.log(Object.prototype.toString.call(null).slice(8, -1)); // Null
console.log(Object.prototype.toString.call(null).slice(8, -1) === "Null"); // true

// 모든 데이터의 타입 확인을 위한 함수
function checkType(data) {
  return Object.prototype.toString.call(data).slice(8, -1);
}

console.log(checkType(null));

console.log(checkType("Hello"));
console.log(checkType([]));
console.log(checkType({}));
console.log(checkType(undefined));
console.log(checkType(false)); // Boolean
