
//===================================================================================================
// #5 / Function
//===================================================================================================

//Parameter 

//premitive parameters
function printMessage(message){
    console.log(message);
}

printMessage(1234);


// object parameters
function changeName(obj){
    obj.name = "ksw";
}
const ellie = {name: 'ellie'};
changeName(ellie);
console.log(ellie.name);

// 3. Default parameters

function showMessage2(message = 'Hello world'){
    console.log(message);
}
function showMessage1(message){
    console.log(message);
}
showMessage1();
showMessage2();

// 4. Rest parameters

function sum(...number){
    let sum=0;
    for (const num of number){
        sum += num;
    }
    return sum;
}

console.log(sum(1,2,3,4,5));


// Fucntion expression

//anonymous function

const print = function () {
    console.log('print');
};

print();
const printAgain = print;
printAgain();

const sumAgain = sum;

console.log(sumAgain(4,6));

// Callback

const correct = function(){
    console.log("correct!");
}

const wrong = function(){
    console.log("worng!");
}

function Quiz(answer, correct, wrong){
    if (answer === 'abc'){
        correct();
    } else {
        wrong();
    }
}

Quiz('asd', correct, wrong);
Quiz('abc', correct, wrong);



// Arrow function
const add = function(a,b) {
    console.log(a+b);
};

add(2,3);

const arrowAdd = (a,b) => { console.log(a+b);};

arrowAdd(2,3);


//Quiz
function calculate(command, a, b){
    if(command === 'add') console.log(a+b);
    else if(command === 'substract') console.log(a-b);
    else if(command === 'divide') console.log(a/b);
    else if(command === 'multyply') console.log(a*b);
    else if(command === 'remainder') console.log(a%b);
    else console.log("정확한 연산을 입력하세요.");
}

calculate('remainder',2,3);

// >> switch 문으로 작성하는것이 더 깔끔. 

//===================================================================================================
// #6 / Class
//===================================================================================================

// class = template (틀)
// object = instance of a class

// 1. Class 선언

class Person{
    // constructor 생성자
    constructor(name, age){
        // fields 속성 (name, age)
        this.name = name;
        this.age = age;
    }

    // method 
    introduce(){
        console.log(`Hi my name is ${this.name}!`);
    }
}


// Object 생성하기

const ksw = new Person('강성욱', 24);

console.log(ksw.name);
console.log(ksw.age);

ksw.introduce();


// 2. Getter and Setter

class User{
    // constructor 생성자
    constructor(name, age){
        // fields 속성 (name, age)
        this.name = name;
        this.age = age;
    }

    get age(){
        return this._age;
    }

    set age(value){
        this._age = value < 0 ? 0 : value;
    }
}

const user1 = new User('강성욱', -24); // object에 나이를 설정할때 setter 호출
console.log(user1.age); // age값을 불러올때 getter 호출


// 3. Fields (public, private)
// public >> Class 외부에서 접근 가능
// private >> Class 외부에서 접근 불가능

class A{
    publicField = 1;
    #privateField = 0;
}

const a = new A();
console.log(a.publicField);
console.log(a.privateField); // 호출 불가능 (undefined)



// 4. Static properties and methods
// object에 상관없이 Class에 고유한 값
// 메모리 사용 줄여줌

class Article {
    static publisher = 'Dream Coding';;
    constructor(articleNumber) {
        this.articleNumber = articleNumber;
    }

    static printPublisher(){
        console.log(Article.publisher);
    }
}

const article1 = new Article(1);

console.log(article1.publisher); // undefined
console.log(Article.publisher); // Dreamcoding

Article.printPublisher();


// 5. 상속 & 다양성
// 부모클래스, 자식클래스 >> 자식클래스가 부모클래스를 상속한다.

// 부모클래스 Shape
class Shape{

    constructor(width, height, color){
        this.width = width;
        this.height = height;
        this.color = color;
    }

    draw() {
        console.log(`drawing ${this.color} color of`);
    }

    getArea(){
        return this.width * this.height;
    }
}

class Rectangle extends Shape{}

class Triangle extends Shape{

    // Overriding >> 자식클래스가 부모클래스에게 상속받은 메소드 중 변경이 필요한 부분만 변경
    getArea(){
        return this.width * this.height / 2;
    }
}

const rectangle = new Rectangle(20, 20, 'blue');
const triangle = new Triangle(20, 20, 'red');

rectangle.draw();
console.log(rectangle.getArea());
triangle.draw();

console.log(triangle.getArea());



// 6. instanceOf

console.log(rectangle instanceof Rectangle); // true
console.log(triangle instanceof Rectangle); // false
console.log(triangle instanceof Shape) // true
console.log(triangle instanceof Object) // true