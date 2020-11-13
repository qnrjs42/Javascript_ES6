/*
    Object.is()
    - 두 개의 파라미터 값과 값 타입을 비교
    같으면 true, 아니면 false

    값과 타입 비교: ===
    값만 비교: ==
*/

const result = Object.is(10, "10");
console.log(result); // false

const one = {}, two = {};
console.log(Object.is(one, two)); // false

console.log((undefined == null)); // true
console.log((undefined === null)); // false
console.log(Object.is(undefined, null)); // false

console.log(0 === -0); // true
console.log(Object.is(0, -0)); // false