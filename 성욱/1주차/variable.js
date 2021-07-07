//Variable 변수 Mutable
//let (added in ES6)

{
    let name='ellie';
    console.log(name);
    name = 'hello';
    console.log(name);
}
//Constant 상수 Immutable
//선언 이후로 값 변경 불가능(immutable data type)
// -security
// -thread safety
// -reduce human mistakes
const daysInWeek = 7;
const maxNumber = 5;

//Varable types 변수 타입
//number, string, boolean, null, undefiedn symbol
//object, box container
//function, first-class function -> 함수도 변수에 할당이 가능하다. (다른함수의 인자가 될 수 있음)

document.write('일주일은 '+daysInWeek+'일 입니다.');

//null, undefined
// -null >> 사용자가 null(비어있는 상태)로 값을 할당한 것
// -undefined >> 사용자가 아직 값을 할당하지 않아서 비어있는 상태

//symbol 고유한 상징
const symbol1 = Symbol('id')
const symbol2 = Symbol('id')
console.log(symbol1===symbol2) // false

//object
const student = {age : 24, address : '서울'};
student.age=23; // student 안에 있는 age와 address 는 변수 >> 변경 가능
console.log(student.age);
console.log(student.address);
console.log(student);

for(let i=0;i<11;i++){
    if(i%2 === 0){
        console.log("q1."+i);

    }
}