var age = 30;
var arr = [1, 2, 3];
var numberArr = [1, 2, 3];
var myName = "hong";
var nameArr = ["a", "b", "c"];
var A;
A = ["hi", 2];
A[0].toUpperCase();
// void never
// 영원히 끝나지 않는 함수
function showError() {
    throw new Error();
}
function infLoop() {
    while (true) {
        // suomthing..
    }
}
// enum : 수동값을 주지 않으면 자동으로 0부터 1씩 증가
// 계속 밑에 있는 것은 앞에 + 1 ( 지정해주지 않으면)
var Os;
(function (Os) {
    Os[Os["Window"] = 0] = "Window";
    Os[Os["IOS"] = 1] = "IOS";
    Os[Os["Android"] = 2] = "Android";
})(Os || (Os = {}));
// 문자열 가능
var OtherOs;
(function (OtherOs) {
    OtherOs["window"] = "win";
    OtherOs["ios"] = "ios";
    OtherOs["android"] = "and";
})(OtherOs || (OtherOs = {}));
var myOs;
myOs = OtherOs.android;
//null, undefined
var a = null;
var b = undefined;
