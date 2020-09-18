/*
    const 변수
    - 값을 바꿀 수 없는 변수
    - 즉, 재할당 불가 그리고 선언과 동시에 할당

    const 변수 전체를 바꿀 수 없지만 Object의 프로퍼티 값은 변경 가능
    그리고 배열의 엘리먼트 값도 변경 가능
*/

// 1. const 변수
const sports = "축구";
try {
  sports = "농구";
} catch (err) {
  console.log("const 할당 불가"); // const 할당 불가
}

// 2. Object의 프로퍼티 값
const book = { title: "책" };
try {
  book = { title: "음악 책" };
} catch (e) {
  console.log("const 전체 할당 불가"); // const 전체 할당 불가
}
book.title = "미술 책";
console.log(book.title); // 미술 책

// 3. 배열의 엘리먼트 값
const book = ["책"];
try {
  book = ["음악 책"];
} catch (err) {
  console.log("const 전체 할당 불가"); // const 전체 할당 불가
}
book[0] = "미술 책";
console.log(book[0]); // 미술책
