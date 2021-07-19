
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