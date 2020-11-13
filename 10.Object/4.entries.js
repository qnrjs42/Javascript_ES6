/*
    Object.entries()
    - 열거 가능한 오브젝트의 { key: value }를 [[key, value]] 형태로 변환

    숫자와 문자가 섞여 있으면 숫자, 문자 순으로 분류
*/


/*
    list는 이터러블 오브젝트
    [[key, value]] 형태를 Map 형태라고 부름
*/
const obj = { music: "음악", book: "책"};
const list = Object.entries(obj);

for(let keyValue of list) {
    console.log(keyValue);
}
// [ 'music', '음악' ]
// [ 'book', '책' ]


/*
    문자열은 문자 하나씩 분리하며 인덱스를 key 값으로 사용
*/
const list= Object.entries("ABC");
for(let keyValue of list) {
    console.log(keyValue);
}
// [0, A]
// [1, B]
// [2, C]


/*
    Object.values()
    - key: value 중 value만 반환
*/
const obj = { music: "음악", book: "책" };
const list = Object.values(obj);
for(let value of list) {
    console.log(value);
}
// 음악
// 책


/*
    Object.fromEntries()
    - [[key, value]] 형태를 { key: value } 형태로 변환
*/
const list = [["one", 10], ["two", 20]];
const obj = Object.fromEntries(list);
console.log(obj); // { one: 10, two: 20 }

// 프로퍼티 키 값이 같으면 나중에 작성된 것으로 대체
const list = [["one", 10], ["one", 20]];
const obj = Object.fromEntries(list);
console.log(obj); // { one: 20 }


/*
    Object.getOwnProperyDescriptors()
    - Object의 프로퍼티 디스크립터를 반환
    상속받은 오브젝트는 반환하지 않음
*/

// 데이터 디스크립터
const obj = { music: "음악" };
const des = Object.getOwnPropertyDescriptors(obj);

for(let name in des.music) {
    console.log(name + ": " + des.music[name]);
};
// value: 음악
// writable: true
// enumerable: true
// configurable: true

// 엑세스 디스크립터
const obj = {
    get music() {}
};
const des = Object.getOwnPropertyDescriptors(obj);

for(let name in des.music) {
    console.log(name + ": " + des.music[name]);
};
// get: get music() {}
// set: undefined
// enumberable: true
// configurable: true