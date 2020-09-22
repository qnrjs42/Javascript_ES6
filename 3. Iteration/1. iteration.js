/*
    이터레이션
    - 사전적 의미: 반복

    이터레이션을 위한 프로토콜 필요
    - 통신 프로토콜
    - 데이터 송수신 프로토콜 정의

    이터레이션 프로토콜은 오브젝트가 이터레이션할 수 있는 구조이어야 함
    - [10, 20] 가능, 100은 불가능

    이터레이션 프로토콜 구분
    - 이터러블 (iterable) 프로토콜  || list[Symbol.iterator]();
    - 이터레이터 (iterator) 프로토콜 || console.log(obj.next());
*/

// 1. 이터레이션
const list = [10, 20];
for (let value of list) {
  console.log(value); // 10 \n 20
}
const obj = list[Symbol.iterator]();
console.log(obj.next()); // { value: 10, done: false }
console.log(obj.next()); // { value: 20, done: false }
console.log(obj.next()); // { value: undefined, done: done }
