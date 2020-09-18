/*
    var 변수
    first.js라는 파일에서
    글로벌 오브젝트에 var 변수를 선언하면
    window 오브젝트에 설정되며
    모든 js 파일에서 변수를 공유한다.

    let 변수
    first.js라는 파일에서
    글로벌 오브젝트에 let 변수를 선언하면
    Script라는 스코프에 설정되며
    모든 js 파일에서 변수를 공유한다.

    block let 변수
    {
        let globalBlock = "block의 let 변수";
    }
    글로벌 오브젝트에 작성한 블록 let 변수는 공유되지 않는다.
    즉, 글로벌 오브젝트의 로컬(지역) 변수이다.

    ES6+ 자바스크립트는
    Block, Local, Script, Global에 의해 변수가 정의된다.
*/

// 1. first.js
var globalVar = "나는 글로벌 변수";
let globalLet = "나는 글로벌 Let";

// ----------------------------------- //
// 2. second.js
console.log(globalVar); // 나는 글로벌 변수
console.log(globalLet); // 나는 글로벌 Let

/*
    var 변수: window에 설정, 공유
    let 변수: Scropt에 설정, 공유
    window.sports = {}처럼 의도적으로 작성하지 않아도 됨

    { let 변수 }: Block에 설정, 공유 X
    글로벌 오브젝트에서만 사용하는 로컬 변수로 사용
*/
// 3. 정리
var globalVar = "var 변수";
let globalLet = "let 변수";
{
  let globalBlock = "block 변수";
}

/*
    var 변수, let 변수: local
    { let 변수 }: Block
*/
// 4. 함수에 작성
function showLocal() {
  var localVar = "var 변수";
  let localLet = "let 변수";
  {
    let blockLet = "block 변수";
  }
}
