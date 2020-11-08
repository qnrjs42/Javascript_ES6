/*
    Trailing commas (트렐링 콤마스)
    - Object 끝에 콤마 사용, } 앞에 콤마 사용 가능
    - 배열 끝에 콤마 사용, ] 앞에 콤마 사용 가능
*/

const obj = {
    book:  100,
    point: 200,
}
const list = [100, 200,];

/*
    거듭 제곱

    좌결합성: 2 ** 3
    우결합성: 2 ** 3 ** 2
*/

console.log(2 ** 3); // 2^3 = 8
console.log(3 ** 2); // 3^2 = 9

console.log(2 ** 3 ** 2); // 2^3^2 = 512
console.log(2 ** (3 ** 2)); // 2^(3^2) = 512
console.log((2 ** 3) ** 2); // (2^3)^2 = 64

/*
    try-catch
    (error) 생략 가능
*/

const sports = '스포츠';
try {
    sports = '축구';
} catch(err) {
    console.log('err 작성');
}

try {
    sports = "축구";
} catch {
    console.log('err 생략')
};

/*
    Object 내에 함수 작성 형태
    function 키워드 사용 안 함
*/

const sports = {
    point: 100,
    // ES5
    getValue: function() {
        return this.point;
    },
    // ES6
    getPoint() {
        return this.point;
    }
}
console.log(sports.getPoint());