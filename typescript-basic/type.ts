let age: number = 30;
let arr: Array<number> = [1, 2, 3];
let numberArr: number[] = [1, 2, 3];

let myName: string = "hong";
let nameArr: string[] = ["a", "b", "c"];

let A: [string, number];
A = ["hi", 2];

A[0].toUpperCase();

// void never

// 영원히 끝나지 않는 함수
function showError(): never {
  throw new Error();
}

function infLoop(): never {
  while (true) {
    // suomthing..
  }
}

// enum : 수동값을 주지 않으면 자동으로 0부터 1씩 증가
// 계속 밑에 있는 것은 앞에 + 1 ( 지정해주지 않으면)
enum Os {
  Window,
  IOS,
  Android,
}
// 문자열 가능
enum OtherOs {
  window = "win",
  ios = "ios",
  android = "and",
}

let myOs: OtherOs;
myOs = OtherOs.android;

//null, undefined
let a: null = null;
let b: undefined = undefined;
