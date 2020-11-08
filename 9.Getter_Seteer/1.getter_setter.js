/*
    getter
    - getter로 선언된 함수를 자동으로 호출
    - 값을 반환하는 시맨틱을 갖고 있으므로 getter 함수에서 값을 반환

    get getPoint()
    - getPoint()앞에 get을 작성하면 getter로 선언

    다수의 getter 사용 가능
*/

const book = {
    point: 100,
    get getPoint() {
        return this.point;
    },
    get getTitle(){
        return '제목'
    }
};
console.log(book.getPoint); // 100
console.log(book.getTitle); // 제목


/*
    setter
    - 프로퍼티에 값을 할당하면 setter로 선언된 함수 자동 호출
    - 값을 설정하는 시맨틱을 갖고 있으므로 setter 함수에서 값을 설정해야 함
*/

const book2 = {
    point: 100,
    set setPoint(param) {
        this.point = param;
    }
};
book2.setPoint = 200;
console.log(book2.point); // 200

// 변수값을 함수 이름으로 사용
const name3 = 'setPoint';
const book3 = {
    point: 100,
    set [name3](param) {
        this.point = param;
    }
};
book3[name3] = 200;
console.log(book3.point); // 200


// setter 삭제
const name4 = 'setPoint';
const book4 = {
    set [name4](param) {
        this.point = param;
    }
};
delete book4[name4];
debugger;
console.log(book4[name4]); // undefined