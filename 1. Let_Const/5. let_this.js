/*
    let 변수와 this

    글로벌 오브젝트에서 let 변수를 this로 참조 불가

    var 변수는 window 오브젝트에 설정
    let 변수는 window 오브젝트에 설정 되지 않음
*/

// let과 this
var music = "음악";
let sports = "축구";
console.log(this.music, this.sports); // 음악, undefined
