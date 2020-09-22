/*
    function spread
    - 호출하는 함수의 파라미터에 spread 대상 작성

    처리 순서
    - 함수 호출 시 파라미터의 배열을 엘리먼트 단위로 전개
    - 전개한 순서대로 파라미터 값으로 넘겨 줌
    - 호출받는 함수의 파라미터에 순서대로 매핑
*/

// 1. function spread
function add(one, two, three) {
  console.log(one + two + three); // 60
}

const values = [10, 20, 30];
add(...values);

/*
    rest 파라미터
    - 분리하여 받은 파라미터를 배열로 결합

    spread: 분리
    rest: 결합
*/

// 2. rest 파라미터
function point(...param) {
  console.log(param); // [10, 20, 30]
  console.log(Array.isArray(param)); // true
}
const values2 = [10, 20, 30];
point(...values2);

// 3. 파라미터와 Rest 파라미터 혼합 사용
function point(ten, ...rest) {
  console.log(ten); // 10
  console.log(rest); // [20, 30]
}
const values = [10, 20, 30];
point(...values);

/*
    Array-like
    Object 타입, 배열처럼 이터러블 가능한 오브젝트

    작성 방법
    - 프로퍼티 key값을 0부터 1씩 증가하면서 프로퍼티 값 작성
    - length에 전체 프로퍼티 수 작성
*/

// 4. Array-like
const values = {
  0: "가",
  1: "나",
  2: "다",
  lenth: 3, // length 프로퍼티는 전개되지 않음, (for in문은 length 프로퍼티도 전개 됨)
};
for (let k = 0; k < values.length; k++) {
  console.log(values[k]);
  // 가
  // 나
  // 다
}

/*
    rest와 arguments 차이

    argument 오브젝트
    - 파라미터 작성에 관계없이 전체를 설정
    - Array-like 형태로, Array 메소드 사용 불가
    __proto__ Object

    rest 파라미터
    - 매핑되지 않은 나머지 파라미터만 설정
    - Array 오브젝트 형태로 Array 메소드 사용 가능
    __proto__ Array
*/
