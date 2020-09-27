/*
    Destructuring Assignment 분할 할당
    - 원 데이터는 변경되지 않음
*/

// 1. Destructuring
let one, two, three;
const list = [1, 2, 3];
[one, two, three] = list;
console.log(one); // 1
console.log(two); // 2
console.log(three); // 3
console.log(list); // [1, 2, 3]

/*
    Array 분할 할당
*/

// 2. 인덱스 기준 할당
let one, two, three;
[one, two, three] = [1, 2, 3];
console.log(one); // 1
console.log(two); // 2
console.log(three); // 3

// 3. 할당받을 변수 수가 적은 경우
// 왼쪽 변수 인덱스에 맞춰 값을 할당하므로 3은 할당되지 않는다.
let one, two;
[one, two] = [1, 2, 3];
console.log(one); // 1
console.log(two); // 2

// 4. 할당받을 변수 수가 많은 경우
// 왼쪽 변수 인덱스에 맞춰 값을 할당하므로 four 변수에 undefined가 할당
let one, two, three, four;
[one, two, three, four] = [1, 2, 3];
console.log(three); // 3
console.log(four); // undefined

// 5. 배열 차원에 맞추어 분할 할당
// 2차원 배열 무시하고 1차원 배열로 만듦
let one, two, three, four;
[one, two, [three, four]] = [1, 2, [3, 4]];
console.log([one, two, three, four]); // [1, 2, 3, 4]

// 6. 인덱스에 변수가 없을 때
// 인덱스를 건너 띄어 할당
let one, two, three, four;
[one, , , four] = [1, 2, 3, 4];
console.log([one, two, three, four]); // [1, undefined, undefined, 4]

// 7. spread, 나머지를 전부 할당
let one, rest;
[one, ...rest] = [1, 2, 3, 4];
console.log(one); // 1
console.log(rest); // [2, 3, 4]

// 8. spread, 인덱스를 반영한 나머지 할당
// 2는 건너띄고, three에 3을 할당, 나머지 [4, 5] rest에 할당
let one, three, rest;
[one, , three, ...rest] = [1, 2, 3, 4, 5];
console.log(three); // 3
console.log(rest); // [4, 5]
