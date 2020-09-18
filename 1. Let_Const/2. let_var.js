/*
    let 변수

    블록 스코프를 가진 변수
    변수가 선언된 블록이 스코프
*/

// 1. 블록 스코프
let sports = "축구";
if (sports) {
  let sports = "농구";
  console.log("안: ", sports); // 안: 농구
}
console.log("밖: ", sports); // 밖: 축구
