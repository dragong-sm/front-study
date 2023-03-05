// 구조 분해 할당 (Destructuring assignment)
// 배열 or 객체 데이터의 구조를 분해하여 구조에 맞게 각각의 변수에 Data 할당

// --------------------------------------------

// 배열 구조 분해 할당
const arr = [1, 2, 3];

// 인덱싱
const a = arr[0];
const b = arr[1];
const c = arr[2];

console.log(a, b, c);

// 구조 분해 할당 배열 구조에 맞게 분해해서 변수에 할당
const [a1, b1, c1] = arr;

console.log(a1, b1, c1);

// 생략 가능 !
// 순서에 맞게 , 로 구분

[, b2, c2] = arr;
console.log(b2, c2);

[, , c3] = arr;
console.log(c3);

// 나머지는 rest 변수로 할당 => 배열 데이터가 됨
const [value, ...rest] = arr;

console.log(value, rest); // 1 [2,3]

// --------------------------------------------

// 객체 구조 분해 할당

const obj = {
  num1: 4,
  num2: 5,
  num3: 6,
};

// 키(속성)값을 이용하여 구조 분해 할당

// const { num1, num2 } = obj;
// console.log(num1, num2); // 4 5

const { num3 } = obj;
console.log(num3); // 6

const { x } = obj;
console.log(x); // undefined => 속성이 존재하지 않음

// y 라는 속성이 없다면 10
const { y = 10 } = obj;
console.log(y); // 10

const { z = 15, num1: num88 = 88 } = obj;
// num1 이라는 속성이름을 num88로 변경하여, 기본값은 88
console.log(z, num88);

// spread(전개) 연산자 사용 가능
const { num2, ...rest2 } = obj;
console.log(num2, rest2); // 5, {num1: 4,num3: 6,}
