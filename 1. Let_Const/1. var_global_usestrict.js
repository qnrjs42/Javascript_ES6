/*
    로컬(지역) 변수, 글로벌(전역) 변수

    로컬 변수 기능과 목적
    - 빠르게 식별자를 해결하기 위해 가까운 스코르의 변수를 사용하려는 것

    글로벌 변수의 기능과 목적
    - 다른 js 파일에서 변숫값 공유
    - 파일에서 공통 변수 개념으로 사용
    - 의도는 좋으나 처리 속도가 떨어짐
    - 글로벌 변수는 글로벌 오브젝트의 로컬 변수

    use strict
    - var 키워드를 선언하지 않고 글로벌 변수 사용 시 에러 처리
    - ES5에서는 코드를 작성해야 했지만 ES6+에서는 디폴트 환경이라 안 써도 된다
*/

// 1. 글로벌 변수 사용 불가
"use strict";
function point() {
  try {
    value = 300;
  } catch (err) {
    console.log("글로벌 변수 사용 불가"); // 글로벌 변수 사용 불가
  }
}
point();
