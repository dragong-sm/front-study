// 함수 (Function)

// 함수 선언문 (Declaration)
// function hello() {}

// 함수 표현식 (Expression)
// const hello = function () {};

// -------------------------------------------

// 호이스팅(Hoisting) : 끌어올려지다

hello(); // 정의되지 않은 함수 사용가능 => 호이스팅 발생 (함수 선언문)

// 선언문
function hello() {
  console.log("Hello");
}

// hello2(); /// 정의되지 않은 함수 사용 => 호이스팅 발생 x (함수 표현식)

// // 표현식
// const hello2 = function () {
//   console.log("Hello");
// };

// -------------------------------------------

// 반환 및 종료

function plus(num) {
  if (typeof num === undefined) {
    console.log("숫자를 입력해주세요 !");
    return 0;
  }
  // return을 통해 반환 하고 함수 종료
  return num + 1;
}

console.log(plus(2)); // 3
console.log(plus()); // NaN 예외처리 => "숫자를 입력해주세요 !" 0

// -------------------------------------------

// 매개변수 패턴(Parameter pattern)

// 기본값(Default value)

function sum(a, b = 1) {
  // a, b => 매개변수
  // b의 기본값을 1로 설정
  return a + b;
}

console.log(sum(1, 2));

// 구조 분해 할당(Destructuring assignment)

// 객체
const user = {
  name: "Dragong",
  age: 85,
};

// function getName(user) {
//   const { name } = user;
//   // return user.name;
//   return name;
// }

function getName({ name }) {
  return name;
}

function getEmail({ email = "이메일이 없습니다" }) {
  return email;
}

console.log(getName(user));
console.log(getEmail(user));

// 배열

const fruits = ["Apple", "Banana", "Cherry"];

// function getSecondItem(array) {
//   return array[1];
// }

// function getSecondItem([a, b, c]) {
//   return b;
// }

function getSecondItem([, b]) {
  return b;
}

console.log(getSecondItem(fruits));

// 나머지 매개변수 (Rest Parameter)
// => 매개 변수의 개수를 알 수 없을 때 사용 !

function sum(...rest) {
  // return rest;

  console.log(arguments);
  // 모든 인수의 정보
  // array Item (유사배열) 이므로 배열이 아님 => reduce 사용 못함

  return rest.reduce(function (acc, cur) {
    return acc + cur;
  }, 0);
}

console.log(sum(1, 2, 3, 4));
console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

// -------------------------------------------

// 화살표 함수 (Arrow function) => ES6 부터

// function sum() {}
// const sum = function () {};
// const sum = () => {};

function sum(a, b) {
  return a + b;
}

// const arrowSum = (a, b) => {
//   return a + b;
// };

const arrowSum = (a, b) => a + b;

console.log(sum(1, 2));
console.log(arrowSum(1, 2));

// ** 패턴

// => 변수에 할당해주어야 함 // 함수 표현식 !
const a = () => {};

// => 매개변수를 가질 수 있음
const b = (x) => {};
const c = (x, y) => {};

// => return 생략 가능 (한 줄 코드일 경우 !)
const d = (x) => {
  return x * x;
};
const e = (x) => x * x;
const f = () => {
  return { a: 1 };
};
const g = () => ({ a: 1 }); // 객체 데이터는 소괄호로 묶어주어야 함
const h = () => [1, 2, 3]; // 배열 데이터는 그냥 return 생략

// -------------------------------------------

// 즉시 실행 함수 (IIFE, Immediately-Invoked Function Expression)

const num = 7;

// const double = () =>{
//   console.log(num * 2)
// }

// double()

// 함수의 이름 없이 익명함수로 만들고 바로 실행
(() => {
  console.log(num * 2);
})();

// * 패턴

(() => {})();
(function () {})();
(function () {})();
!(function () {})();
+(function () {})();

((a, b) => {
  console.log(a);
  console.log(b);
})(1, 2); // 두번째 소괄호의 값을 즉시실행함수의 매개변수로 사용

((a, b) => {
  console.log(a.innerWidth);
  console.log(b.body);
})(window, document); // 코드 난독화 가능 : 외부의 변수를 가져와서 사용 가능

// -------------------------------------------

// 콜백(Callback)
// => 함수가 실행될 떄, 인수로 함수를 넣어주는 개념
// => 다른 함수의 내부에서 호출하여 사용하는 개념

const a1 = (callback) => {
  console.log("A");
  callback();
};

const b1 = () => {
  console.log("B");
};

a1(b1);
// b1함수가 a1함수의 인수로 들어감

const sum2 = (a, b, c) => {
  //  () => {} 콜백함수
  setTimeout(() => {
    c(a + b);
    // return a, b;
  }, 1000);
};

sum2(1, 2, (value) => {
  console.log(value);
});

// -------------------------------------------

// 재귀 (Recursive)

// => 기본적으로 무한 동작
// => 필요에 따라 멈추는 조건을 넣어주어야 함

let i = 0;

const ab = () => {
  console.log("AB");
  i += 1;
  if (a < 4) {
    ab();
  }
};

ab();

const userA = { name: "A", parent: null };
const userB = { name: "B", parent: userA };
const userC = { name: "C", parent: userB };
const userD = { name: "D", parent: userC };

const getRootUser = (user) => {
  if (user.parent) {
    return getRootUser(user.parent);
  }
  return user;
};

console.log(getRootUser(userD));

// -------------------------------------------

// 호출 스케쥴링(Scheduling a function call)
// 함수의 호출 시간 지정

// setTimeout, setInterval, clearTimeout

const hi = () => {
  console.log("hi");
};

const timeout = setInterval(hi, 2000);
// clearTimeout(timeout);

// h1 태그를 선택하면 timeout 종료
const h1El = document.querySelector("h1");
h1El.addEventListener("click", () => {
  console.log("Clear");
  clearTimeout(timeout);
});

// -------------------------------------------

// this
// => 일반 함수에서의 this는 호출 위치에서 정의
// => 화살표 함수에서의 this는 자신이 선언된 함수(렉시컬) 범위에서 정의
//    * 렉시컬(Lexical)이란 함수가 동작할 수 있는 유효한 범위를 의미

function user2() {
  this.firstName = "HI";
  this.lastName = "HELLO";

  return {
    firstName: "Dragong",
    lastName: "Hong",
    age: 85,
    getFullName: function () {
      // this : 속해있는 객체 데이터를 가리킴 => Dragong Hong
      return `${this.firstName} ${this.lastName}`;
    },
    getFullName2: () => {
      // 화살표 함수 this : getFullName2 함수를 감싸는 함수를 가리킴
      // => 여기서는 해당 함수가 user2이므로 HI HELLO가 됨 !
      return `${this.firstName} ${this.lastName}`;
    },
  };
}

console.log(user2().getFullName()); // Dragong Hong
console.log(user2().getFullName2()); // HI HELLO
