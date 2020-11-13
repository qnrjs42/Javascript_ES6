/*
    Deep Copy
    - Object를 할당하면 프로퍼티 값이 연동됨
    - 한 쪽 오브젝트의 프로퍼티 값을 바꾸면 다른 오브젝트의 프로퍼티 값도 바뀜
*/

// 1. 프로퍼티 값 연동
const sports = {
    item: "축구"
};
let copy = sports;
sports.item = "농구";
console.log(copy.item); // 농구

// 2. 연동 되지 않게 프로퍼티 단위로 복사
const book = {
    item: { title: "자바스크립트" }
};

let copy = {};
for(let key in book) {
    let value = book[key];
    copy[key] = {};
    for(let name in value) {
        copy[key][name] = value[name];
    }
}
book.item.title = "책";
console.log(copy.item.title); // 자바스크립트


// 3. json 함수 사용
const book = {
    item: { title: "자바스크립트" }
};

const copy = JSON.parse(JSON.stringify(book));
book.item.title = "책";
console.log(cpoy.item.title); // 자바스크립트