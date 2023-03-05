// 선택적 체이닝 (Optional Chaining)

const user1 = {};
console.log(user1.name); // undefined;

// . 표기법 (체이닝) 사용 못하는 변수에서 ?를 붙여줌으로써, 확인 가능
const user2 = null;
console.log(user2?.name); // undefined

const userA = {
  name: "Dragong",
  age: 6,
  address: {
    country: "Korea",
    city: "Seoul",
  },
};

const userB = {
  name: "Neo",
  age: 23,
};

function getCity(user) {
  // return user.address.city;

  // address가 undefined 라면 뒤의 내용 실행 x undefined 반환
  // 예외 처리용으로 선택적 체이닝 사용

  // return user.address?.city;

  // undefined 가 되니까 .. falsy 이므로, 참 Data인 no address 반환
  return user.address?.city || "no address";
}

console.log(getCity(userA));
// console.log(getCity(userB)); // Type Error : Cannot read properties of undefined

console.log(getCity(userB)); // undefined
// 체이닝의 내용이 undefined 라면 뒤의 내용 실행하지 않고, undefined 값 반환
