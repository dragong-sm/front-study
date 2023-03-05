import _ from "lodash";

console.log(_.upperCase("hello-world"));

// typeScript 문법
// 브라우저에서 직접 동작 x - parcel 번들러가 js 코드로 변환
interface User {
  name: String;
  age: number;
}

// 객체
const user: User = {
  name: "Dragong",
  age: 85,
};

console.log(user);
