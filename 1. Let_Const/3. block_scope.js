/*
    function 블록
    - function name(){}도 블록 스코프

    function 안과 밖에
    - 같은 이름의 let 변수 선언 가능
    - 스코프가 다르기 때문

    function 밖의 let 변수를 function 안에서 사용 가능(클로저)
*/

// 1. function 블록
let sports = "축구";
function show() {
  let sports = "농구";
  console.log("안: ", sports); // 안: 농구
}
show();
console.log("밖: ", sports); // 밖: 축구

// 2. 함수 밖 변수 사용(클로저)
let sports = "축구";
function show() {
  console.log(sports); // 축구
}
show();

/*
    try-catch
    
    try 블록 {} 기준으로 안과 밖에 같은 이름의 let 변수 선언 가능

    catch 블록은 try 블록안에 코드를 사용하지 않는다
*/

// 1. try-catch
let sports = "축구";
try {
  let sports = "농구";
  console.log("안: ", sports); // 안: 농구
} catch (err) {}
console.log("밖", sports); // 밖: 축구

// 2. try 밖의 변수 사용
let sports = "축구";
try {
  let sports = "농구";
  console.log("안: ", sports); // 안: 농구
  abc = error;
} catch (err) {
  console.log("catch: ", sports); // catch: 축구
}
console.log("밖: ", sports); // 밖: 축구

/* 
    switch-case
    switch문도 블록 스코프
    switch 블록 기준으로 같은 이름의 let 변수 작성 불가
    case, default는 블록 스코프가 아님
*/

let item = 1;
switch (item) {
  case 1:
    let sports;
    break;
  case 2:
  // let sports; // 같은 블록스코프라 같은 이름의 let 변수를 선언할 수 없다
  default:
    console.log(sports);
}
