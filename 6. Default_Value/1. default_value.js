/*
    default value
    값을 할당하지 않으면 사전에 정의된 값을 할당
*/

// 1. 할당할 값이 없으면 디폴드 값 할당
const [one, two, five = 50] = [10, 20];
console.log(five); // 50

// 2. 할당할 값이 있으면 디폴트 값 무시
const [one, two, five = 50] = [10, 20, 70];
console.log(five); // 70

// 3. Object는 프로퍼티 이름으로 체크
const { one, two = 20 } = { one: 10 };
console.log(two); // 20

// 4. 디폴트 값 적용 순서
const [one, two = one + 20, five = two + 50] = [10];
console.log(two); // 30
console.log(five); // 80

// 5. 파라미터 값이 undefined일 때
const point = () => 20;
const add = (one, two = point()) => one + two;
const result = add(10, undefined);
console.log(result); // 30
