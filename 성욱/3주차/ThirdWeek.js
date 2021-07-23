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

