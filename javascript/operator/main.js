// 연산자 : 기호 ( + - / * ... )
// 피연산자 : 숫자나 문자 등 (1 + 2 에서 1과 2)

// --------------------------------------------

// 산술 연산자 (Arithmetic)
// +, -, *, /, %

console.log(1 + 2);
console.log(5 - 7);
console.log(3 * 4);
console.log(10 / 2);
console.log(7 % 5); // 나머지

function isEven(num) {
  return num % 2 === 0;
}

console.log(isEven(3));
console.log(isEven(12));

// --------------------------------------------

// 할당 연산자 (Assignment)
// =, +=, -=, *=, /=, %=

// 할당
let a = 3;
// 재할당
a = a + 2;
a += 2;

console.log(a);

// --------------------------------------------

// 증감 연산자 (Increment & Decrement)
// ++, --

console.log(a++);
console.log(a);

console.log(++a);
console.log(a);

// --------------------------------------------

// 부정 연산자 (Negation)
// !
// Boolean 데이터로 출력 됨

console.log(!true); // false
console.log(!0);

console.log(!!false); // false

console.log(!!!null); // true
console.log(!undefined); // true
console.log(!NaN); // true

// --------------------------------------------

// 비교 연산자 (Comparison)
// ==, !=, ===, !==, >, >=, <, <=

const a1 = 1;
const b1 = 2;

// 동등(형 변환 !)
console.log(a1 == b1); // false

// 부등 (형 변환 !)
console.log(a1 != b1); // true

// 일치
console.log(a1 === b1); // false

// 불일치
console.log(a1 !== b1); // true

// 큼
console.log(a1 > b1);

// 크거나 같음
console.log(a1 >= b1);

// --------------------------------------------

// 논리 연산자 (Logical)
// &&(AND), ||(OR)

const a3 = true;
const b3 = false;

// AND(그리고)

if (a3 && b3) {
  console.log("모두가 참 !");
} else {
  console.log("둘 중 하나만 참 or 모두 거짓");
}

console.log(1 && 0);
// 0
// 숫자 1은 참이므로 반환 x 0은 거짓이므로 반환

console.log(1 && 2 && 0);
// 0
// 가장 먼저 만나는 거짓 데이터 반환

console.log(1 && 0 && 2);
// 0
// 0을 반환하고 2는 x

console.log("A" && "" && "B");
// "" 반환 => falsy 이므로

// OR(또는)
if (a3 || b3) {
  console.log("하나 이상이 참 !");
}

console.log(false || true);
console.log(false || 0 || true);
console.log(false || 0 || {});
// {}
// 참을 만나면 반환하고 마무리
console.log(false || true || NaN);
// true

// --------------------------------------------

// 병합 연산자 ( Nullish Coalescing)
// ??
// => 제일 처음 만난 null, undefined가 아닌 값 반환

const n = 0;

const num1 = n || 7;
// n이 거짓이면 7 사용

console.log(num1);

// nullish
const num2 = n ?? 7;
// null, undefined만 넘어가고 나머지 데이터를 만나면 반환
// 따라서 0이 null과 undefined가 아니니까 n(0) 반환

console.log(num2);

console.log(null ?? 1 ?? 5);
// 1

console.log(null ?? undefined);
// undefined 반환 (마지막 데이터)

console.log(false ?? null ?? 2);
// false

// --------------------------------------------

// 삼항 연산자 (Ternary)
// 조건 ? 참 : 거짓

const a4 = 1;

if (a4 < 2) {
  console.log("참");
} else {
  console.log("거짓 ... ");
}

console.log(a4 < 2 ? "참" : "거짓");

function getAlert(message) {
  return message ? message : "no message !";
}

console.log(getAlert("안녕하세요 ~"));
console.log(getAlert(""));

// --------------------------------------------

// 전개 연산자 (Spread Operator)

const a5 = [1, 2, 3];

console.log(...a5); // 1 2 3
console.log(1, 2, 3);

const b5 = [4, 5, 6];

const c = a5.concat(b5);

console.log(c); // [1,2,3,4,5,6]

const d = [a5, b5];
console.log(d); // [1,2,3][4,5,6]

const e = [...a5, ...b5];
console.log(e); // [1,2,3,4,5,6]

const obj1 = { x: 1, y: 2 };
const obj2 = { y: 3, z: 4 };

const obj3 = Object.assign({}, obj1, obj2);
console.log(obj3); // {x: 1, y: 3, z: 4}

const obj4 = { obj1, obj2 };
console.log(obj4); // { x: 1, y: 2 }, { y: 3, z: 4 }

const obj5 = { ...obj1, ...obj2 };
console.log(obj5); // {x: 1, y: 3, z: 4}

function fn(x, y, z) {
  console.log(x, y, z);
}

fn(1, 2, 3);

const a6 = [1, 2, 3];
// fn(a[0], a[1], a[2])

fn(a); // undefined
fn(...a); // 1 2 3
