/*
    Arrow Function (화살표 함수)

    (param) => {}  

    function(){} 축약 형태, this 참조가 다름
*/

// 1. arrow function
const add = function (one, two) {
  return one + two;
};
console.log(add(1, 2)); // 3

const total = (one, two) => {
  return one + two;
};
console.log(total(1, 2)); // 3

// 2. 함수 블록 {}과 return 작성 생략
const total2 = (one, two) => one + two;
console.log(total2(1, 2)); // 3

// 3. 함수 블록 {}만 작성한 형태
const total3 = (one) => {};
console.log(total3(1)); // undefined

// 4. {key: value}  반환
const point = (param) => ({ book: param });
const result = point("책");

for (const key in result) {
  console.log(key + ": " + result[key]); // book: 책
}
// retrun할 때 ()를 작성하지 않으면 undefined 반환

// 5. 파라미터가 하나일 때
const get = (param) => param + 20;
console.log(get(10)); // 30

// 6. 파라미터가 없을 때
const get2 = () => 10 + 20;
console.log(get2()); // 30
