/*
    화살표 함수 구조

    function을 => 표기하는게 전부가 아님
    화살표 함수는 일반 함수와 구조가 다름

    일반 함수
    - 일반 함수를 전개하면 prototype과 constructor가 있다
    - argumnets 사용 가능

    화살표 함수
    - 화살표 함수를 전개하면 prototype과 constructor가 없다
    - prototype에 메소드를 연결하여 확잘 불가
    - prototype이 없어서 가벼움
    - constructor가 없으니 new 연산자로 인스턴스 생성 불가
    - arguments 사용 불가, 사용 시 ReferenceError가 발생
    - arguments 대신 rest 파라미터 사용
*/
