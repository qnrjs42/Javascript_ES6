/*
    object operation

    { book: 10, book: 20 }
    - 프로퍼티 이름인 book이 같다
    - ES5 strict 모드에서 프로퍼티 이름이 같으면 에러 발생
    - ES6에서는 strict 모드에 관계없이 에러 발생하지 않음
    - 뒤에 작성한 프로퍼티 값으로 대체
*/

// 1. 같은 프로퍼티 이름 사용
const value = { book: 10, book: 20 };
console.log(value); // { book: 20 }

// 2. Shorthand property names
const one = 10,
  two = 20;
const values = { one, two };
console.log(values);

/*
    프로퍼티 이름 조합
*/

// 3. 문자열을 프로퍼티 이름으로 사용
const value = { ["one" + "two"]: 12 };
console.log(value.onetwo); // 12

// 4. 변수값을 프로퍼티 이름으로 사용
const item = "world";
const sports = {
  [item]: 100,
  [item + " Cup"]: "월드컵",
  [item + "Sports"]: function () {
    return "스포츠";
  },
};
console.log(sports[item]); // 100
console.log(sports[item + " Cup"]); // 웓드컵
console.log(sports[item + "Sports"]()); // 스포츠

// 5. 분할 할당을 조합한 형태
const item = "book";
const result = ({ [item]: title } = { book: "책" });
console.log(result); // {book: 책}
