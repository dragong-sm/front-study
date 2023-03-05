// If 조건문

// if(조건){} else if(조건){} else {}

function isPositive(number) {
  if (number > 0) {
    return "양수";
  } else if (number < 0) {
    return "음수";
  } else {
    return "0";
  }
}

console.log(isPositive(1)); // 양수
console.log(isPositive(10));
console.log(isPositive(-2)); // 음수
console.log(isPositive(-0));

// -------------------------------------------------

// Switch 조건문

/*

Switch (조건){
  case 값1 :
    // 조건이 "값1"일 때, 실행
    break

  case 값2 : 
    // 조건이 "값2"일 때, 실행
    break

  default : 
    // 조건이 "값1" & "값2" 둘 다 아닐 경우 실행
}

*/

function price(fruit) {
  let p;
  switch (fruit) {
    case "Apple":
      p = 1000;
      break;
    case "Banana":
      // return 값을 만나면 함수 끝 => break 사용 필요 x
      return 1500;
    case "Cherry":
      p = 2000;
      break;
    default:
      p = 0;
  }

  return p;
}

console.log(price("Apple")); // 1000
console.log(price("HI")); // 0
console.log(price("Banana")); // 1500

// -------------------------------------------------

// For 반복문

// for (초기화; 조건; 증감){ 실행 코드 }

for (let i = 0; i < 10; i += 1) {
  if (i % 2 === 0) {
    // continue : 현재 반복 종료 후, 다음 반복 실행
    continue;
  }
  console.log(i);
}

for (let i = 9; i > -1; i -= 1) {
  if (i < 4) {
    // break : 모든 반복 종료
    break;
  }
  console.log(i);
}

// ----------------------------------------------

// For Of 반복문
// => 배열 데이터에서 각각의 아이템에 쉽게 접근 가능

// for (const 변수 of 배열){ 실행문 }

const fruits = ["Apple", "Banana", "Cherry"];

// for (let i = 0; i < fruits.length; i += 1) {
//   console.log(fruits[i]);
// }

// 배열에서 각각의 아이템에 반복 접근
for (const fruit of fruits) {
  console.log(fruit);
}

const users = [
  {
    name: "A",
    age: 10,
  },
  {
    name: "B",
    age: 25,
  },
  {
    name: "C",
    age: 35,
  },
];

// for (let i = 0; i <users.length; i +=1){
//   console.log(users[i])
// }

for (const user of users) {
  console.log(user);
  console.log(user.name);
}

// ----------------------------------------------

// For in 반복문
// => 객체 데이터 접근
// => 객체 데이터는 순서를 가지지 않기 떄문에 원하는 순서대로 출력되지 않을 수 있음

// for (const 변수 in 객체){ 실행문 }

const user = {
  name: "Dragong",
  age: 85,
  isValid: true,
  email: "email123@gmail.com",
};

for (const key in user) {
  console.log(key); // 속성 (key)
  console.log(user[key]); // 속성의 값 (value)
}

// ----------------------------------------------

// while 반복문
// => 언제 반복이 종료될 지, 반드시 명시 ! ( 무한반복 가능성 )
// => 조건이 거짓이 되면 종료

let n = 0;

while (n < 10) {
  console.log(n);
  n += 1;
}

// ----------------------------------------------

// Do while 반복문
// => 일단 do 부분 실행 후, while 조건 확인하여 반복 ( 최초 한 번은 실행 )

let x = 0; // 대표적 거짓

// while (x) {
//   console.log(x);
// }

do {
  console.log(x);
} while (x);

do {
  console.log(x);
  x += 1;
} while (x < 10);
