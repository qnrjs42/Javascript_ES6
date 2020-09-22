/*
    이터레이터 프로토콜
    - 값을 순서대로 생성

    Symbol.iterator()를 호출하면
    - 이터레이터 오브젝트를 생성하여 반환
    - 이터레이터 오브젝트에 next()가 있음
    - 생성한 오브젝트를 이터레이터라고도 부름
*/

// 1. 이터레이터 오브젝트
const list = [10, 20];
const obj = list[Symbol.iterator]();
console.log(obj.next()); // { value: 10, done: false } <- 이런 형태가 이터레이터라고 부름
console.log(obj.next()); // { value: 20, done: false }
console.log(obj.next()); // { value: undefined, done: done }
