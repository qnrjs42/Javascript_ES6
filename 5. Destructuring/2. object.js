/*
    object 분할 할당
    object의 프로퍼티를 분할하여 할당  

    프로퍼티 이름이 같은 프로퍼티에 값을 할당
*/

// 1. 프로퍼티 값 할당
const { one, two } = { one: 10, two: 20 };
console.log(one); // 10
console.log(two); // 20

// 2. 프로퍼티 이름을 별도로 작성
let one, two;
({ one, two } = { one: 10, two: 20 });
console.log(one); // 10
console.log(two); // 20

// 3. 프로퍼티 값 위치에 변수 이름 작성
let five, six;
({ one: five, two: six } = { one: 10, two: 20 });
console.log(five); // 10
console.log(six); // 20

// 4. Object 구조에 맞추어 값 할당
// plus는 구조를 만들기 위한 것으로 실제로 존재하지 않음
const {
  one,
  plus: { two, three },
} = { one: 10, plus: { two: 20, three: 30 } };
console.log(one); // 10
console.log(two); // 20
console.log(three); // 30
console.log(plus); // ReferenceError

// 5. 나머지를 Object로 할당
const { one, ...rest } = { one: 10, two: 20, three: 30 };
console.log(rest); // { two: 20, three: 30 }

/*
    파라미터 분할 할당
    호출하는 함수에서 Object 형태로 넘겨준 파라미터 값을 호출받는 함수의 파라미터에 맞추어 할당
    Object 구조에 맞추어 값 할당
*/

// 6. 파라미터 값 할당 (1번 프로퍼티 값 할당과 비슷)
function add({ one, two }) {
  console.log(one + two); // 30
}
add({ one: 10, two: 20 });

// 7. Object 구조에 맞춰 할당 (4. Object 구조에 맞추어 값 할당과 비슷)
function add({ one, plus: { two } }) {
  console.log(one + two); // 30
}
add({ one: 10, plus: { two: 20 } });
