let myName = "DRAGONG";
let email = "email123@gmail.com";
let hello = `Hello ${myName} ?!`;

console.log(myName);
console.log(email);
console.log(hello);

let user = {
  name: "DRAGONG",
  age: 26,
};

console.log(user);
console.log(user.name);
console.log(user.age);

// ---------------------------------------

let a = 2;
const b = 5;

console.log(a + b);
console.log(a - b);

// let은 재할당 가능
a = 6;
// const는 재할당 불가
// b = 10;

console.log(a * b);

// -----------------------------------------

// 함수 선언
function helloFunc() {
  console.log("HELLO");
}

// 함수 호출
helloFunc();

// 객체 데이터 안에 함수 선언
const dragong = {
  name: "Dragong",
  age: 100,
  // 메소드(Method)
  getName: function () {
    return this.name;
  },
};

const herName = dragong.getName();
console.log(herName);
console.log(dragong.getName());

// --------------------------------------------

// 조건문

let isShow = true;
let checked = false;

if (isShow) {
  console.log("Show!");
}

if (checked) {
  console.log("Checked!");
} else {
  console.log("no checked!");
}

// ------------------------------------------------

// DOM API

// HRML 요소 검색
let boxEl = document.querySelector(".box");
let boxElAll = document.querySelectorAll(".box");
console.log(boxEl);
console.log(boxElAll);

// HTML 요소에 이벤트 적용
boxEl.addEventListener("click", function () {
  console.log("Click!!!");
  //   boxEl.classList.add("active");
  //   console.log(boxEl.classList.contains("active")); // true
});

// 요소의 클래스 정보 객체 추가
boxEl.classList.add("active");
let isContains = boxEl.classList.contains("active");
console.log(isContains); // true

// 요소의 클래스 정보 객체 제거
boxEl.classList.remove("active");
isContains = boxEl.classList.contains("active");
console.log(isContains); // false

// Getter : 값을 얻는 용도
console.log(boxEl.textContent);

// Setter : 값을 지정하는 용도
boxEl.textContent = "안녕하세요";
console.log(boxEl.textContent);

// ---------------------------------------------------

// 메소드 체이닝

const greeting = "Hello~";

// split : 문자를 인수 기준으로 쪼개서 배열로 반환
// reverse : 배열 뒤집기
// join : 배열을 인수 기준으로 문자로 병합해 반환

// 메소드 체이닝
// 메소드를 체인처럼 연결함
const chainGreeting = greeting.split("").reverse().join("");

console.log(greeting);
console.log(chainGreeting);
