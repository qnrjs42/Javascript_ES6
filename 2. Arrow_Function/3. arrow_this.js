/*
    화살표 함수와 this

    strict 모드에서 함수를 호출할 때 
    - 함수 앞에 오브젝트 작성은 필수
    - 화살표 함수로 해결

    화살표 함수에서 this가 글로벌 오브젝트 참조

    strict 모드에서 window.book()처럼 호출하는 함수 앞에 오브젝트 작성
    작성하지 않으면 book() 함수 안에서 this 값이 undefined

    화살표 함수로 작성하면 getPoint()로 호출 가능

*/
// 1. 오브젝트 작성 필수
"use strict";
function book() {
  function getPoint() {
    console.log(this); // undefined
  }
  getPoint(); // getPoint는 호출 시 함수 앞에 오브젝트가 없음
}
window.book();

// 2. 화살표 함수 사용
("use strict");
var point = 100;
function sports() {
  const getPoint = () => {
    console.log(this.point); // 100
  };
  getPoint(); // 화살표 함수로 호출 가능
}
window.sports();
