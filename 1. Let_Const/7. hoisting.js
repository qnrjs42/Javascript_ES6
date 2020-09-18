/*
    호이스팅
    ES5의 실행 콘텍스트 처리 순서
    1. 함수 선언문 설정
    2. 변수 이름 바인딩, 변숫값은 undefined로 초기화
    3. 소스 코드 실행

    let 변수는 호이스팅이 되지 않음
    let 변수 앞에 변수 사용 불가
*/

// 1. 호이스팅
console.log("music 변수:", music); // music 변수: undefined
var music = "음악";

// 2. 호이스팅 되지 않음
try {
  console.log(sports);
} catch (err) {
  console.log("호이스팅 불가"); // 호이스팅 불가
}
let sports = "축구";
