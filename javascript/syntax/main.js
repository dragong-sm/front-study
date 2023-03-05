// If 조건문

/*

if(조건){

} else if(조건){

} else {

}

*/

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
