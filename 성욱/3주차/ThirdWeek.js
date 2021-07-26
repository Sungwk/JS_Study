//===================================================================================================
// #7 / Object
//===================================================================================================


const ksw = { name:'ksw', age:24 };

// 1. Computed properties

function printValue(obj, key){
    console.log(obj[key]);
}

printValue(ksw, 'age'); // key는 String 타입으로 전달!!!!

// 2. Constructor function (생성자 함수)

const person1 = {name:'kkk', age:1};

function Person(name, age){
    this.name = name;
    this.age = age;
}

const person2 = Person('aaa',2);
console.log(person2);

// 3. in operator

console.log('name' in ksw);


// 4. for..in / for..of
// for (key in obj) >> object 안에 있는 모든 key에 대해 접근
 
for (key in ksw){
    console.log(key);
}

// for (value of iterable) >> array 안에 있는 모든 value에 대해 접근

for (value of 'ksw'){
    console.log(value);
}

// 5. Object cloning (오브젝트 복제)

const person3 = ksw; // 두 오브젝트의 reference가 같음 즉 주소가 복제됨.

console.log(ksw);
person3.age = 25;
console.log(ksw);
// 따라서 하나의 값을 바꾸면 둘다 값이 바뀜

const person4 = {};

Object.assign(person4, ksw) // 
console.log(person4);
ksw.age = 24;
console.log(ksw);
console.log(person4);



//===================================================================================================
// #8 / Array
//===================================================================================================


// 2. Index position

const number =[1,2,3];

console.log(number); // 배열 전체 출력
console.log(number.length); // 배열 길이 출력
console.log(number[1]); //배열의 해당 인덱스 값 출력

// 3. Looping over an array (배열의 모든 값 출력)

// a. for
console.log("for");

for(let i=0; i<number.length; i++){
    console.log(number[i]);
}

// b. for of

console.log("for of");
for(let num of number){
    console.log(num);
}

// c. forEach (콜백함수)
console.log("forEach");
number.forEach((number) => console.log(number));


// 4. 삽입, 삭제

// push : 배열 끝에 값 추가
number.push(4);
console.log(number);

// pop : 배열 끝 값 제거
number.pop();
console.log(number);


// shift, unshift는 push, pop에 비해 연산 속도 느림
// unshift : 배열 처음에 값 추가
number.unshift(0);
console.log(number);

// shift : 배열 첫번째 값 제거
number.shift();
console.log(number);

// splice(startIndex, deleteCount) : 원하는 index 값 삭제, 어디서부터 몇개 지울건지

number.push(4,5,6);
console.log(number);

number.splice(3, 1);
console.log(number);

number.splice(3, 2, 4); // 3번부터 두개를 지우고 4 추가
console.log(number);

 // 두가지 배열 묶기

 const number2 = [5,6,7];

 const allNumber = number.concat(number2);
 console.log(allNumber);


 // 5. 검색
 // find the index

 console.log(number); // 1 2 3 4
 console.log(number.indexOf('가')); // 2
 console.log(number.includes(6)); // false
 number.push(1); // number : [ 1 2 3 4 1 ]
 console.log(number.lastIndexOf(1)); // 4