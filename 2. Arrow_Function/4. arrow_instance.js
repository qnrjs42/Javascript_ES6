/*
    화살표 함수와 인스턴스

    인스턴스에서 화살표 함수의 작성 위치에 따라 this가 참조하는 오브젝트가 다름
*/

// 1. 메소드로 작성
var point = 200;
const Point = function () {
  this.point = 100;
};
// 일반 함수에 화살표 함수 연결하면 함수 안에서 this가 글로벌 오브젝트를 참조
Point.prototype.getPoint = () => {
  console.log(this.point); // 200
};
new Point().getPoint();

// 2. 메소드 안에 작성
const Point2 = function () {
  this.point = 100;
};
Point2.prototype.getPoint = function () {
  const add = () => this.point + 20;
  console.log(add());
  [1, 2].forEach((value) => {
    console.log(this.point + value);
  });
};
new Point2().getPoint();
