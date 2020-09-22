/*
    이터러블 오브젝트

    이터러블 프로토콜
    - 오브젝트가 반복할 수 있는 구조이어야 하고 Symbol.iterator를 갖고 있어야 함

    Default로 iterable 프로토콜을 가짐
    - Array, Argument, String, TypedArray, Map, Set, Dom NodeList

    {} 오브젝트는 이터러블 오브젝트가 아님

    Symbol.iterator는 함수이므로 호출 가능

    Array 오브젝트를 상속 받으면 이터러블 오브젝트가 된다
*/

// 1. 이터러블 프로토콜
const list = [10, 20];
console.log(list[Symbol.iterator]);

// 2. 이터러블 오브젝트
const list2 = [10, 20];
console.log(list2[Symbol.iterator]); // function values() { [native code] }

const obj = { one: 10, two: 20 };
console.log(obj[Symbol.iterator]); // undefined
