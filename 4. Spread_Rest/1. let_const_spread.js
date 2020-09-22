/*
    let, const 사용 기준

    let: 변경 가능
    const: 변경 불가능
*/

// 1. let, const 사용 기준
const list = [10, 20];

let values = [10, 20];
values.push(30, 40);

for (let k = 0; k < list.length; k++) {}

const book = (param) => param + 10;

/*
    spread
    [...iterable]
    - 점 3개 ...와 이터러블 오브젝트

    { key: value }의 Object가 이터러블 오브젝트는 아니지만 전개 가능
*/

// 1. spread 형태
const list2 = [21, 22];
console.log([11, ...list2, 12]); // {11, 21, 22, 12}

const obj = { key: 50 };
console.log({ ...obj }); // {key: 50}

// 2. Array spread
const one = [21, 22];
const two = [31, 32];
const result = [11, ...one, 12, ...two];
console.log(result); // [11, 21, 22, 12, 31, 32]
console.log(result.length); // 6

// 3. String spread
const target = "ABC";
console.log([...target]); // [A, B, C]

// 4. Object spread
const one2 = { key1: 11, key2: 22 };
const result2 = { key3: 33, ...one2 };
console.log(result2); // { key3: 33, key1: 11, key2: 22 }

/*
    Object는 이터러블 오브젝트가 아니므로 값이 대체되며,
    [...one] 형태로 작성 시 에러 발생
*/
// 5. 프로퍼티 값 대체
const one3 = { book: 10, music: 20 };
const result3 = { book: 30, ...one3 };
console.log(result3); // {book: 10, music: 20}

// 6. push(..spread) String spread
let result4 = [21, 22];
const five = [51, 52];
result.push(...five);
console.log(result4); // [21, 22, 51, 52]

result4.push(..."abc");
console.log(result4); // [21, 22, 51, 52, a, b, c]
