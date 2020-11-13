/*
    Object.assign()
    - 두 번째 파라미터의 오브젝트 프로퍼티를 첫 번째 파라미터의 오브젝트에 복사하고 첫 번째를 반환
*/

const sports = {
    event: "축구",
    player: 11
};
let dup = {};

Object.assign(dup, sports);
console.log(dup); // { event: 축구, player: 11 }

const book = { title: '책' };
const sports = { item: "축구" };
const obj = Object.assign({}, book, sports); // { title: 책, item: 축구 }