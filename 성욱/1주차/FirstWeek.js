
//===================================================================================================
// #3 / Data
//===================================================================================================


// template literals >> 백틱기호 ` 와 ${<변수>}를 이용해 변수 값을 간단하게 사용 가능
const name = '성욱'
console.log('name = '+name)
console.log(`name = ${name} `)

//Dynamic typing 
let text = 'hello';
console.log(`value : ${text}, type : ${typeof text}`);
text = 1;
console.log(`value : ${text}, type : ${typeof text}`);
text = '8' + 5;
console.log(`value : ${text}, type : ${typeof text}`);
text = '9'/'3';
console.log(`value : ${text}, type : ${typeof text}`);
//TypeScript


//===================================================================================================
// #4 / opreator
//===================================================================================================



// 1.String concatenation (문자열 연결하기)

console.log('my' + 'cat');
console.log('1' + 2);
console.log('Seongwook\'s cat');
console.log('Hi\tHello\nHow are you?'); // \t >> tab , \n >> 줄바꿈


// 2. Numeric operators (숫자 연산)

console.log(1+2);  // 더하기
console.log(1-2);  // 빼기
console.log(2*3);  // 곱하기
console.log(5/2);  // 나누기
console.log(5%2);  // 나머지
console.log(5**2); // 제곱


// 3. Increment and decrement operator (증감연산자)

// 변수++, 변수-- >> 입력 후에 변수 값에 1을 더함 / 뺌
// ++변수, --변수 >> 입력 전에 변수 값에 1을 더함 / 뺌

let counter = 2;
const postIncrement = counter++; // postIncrement = 2, counter = 3
const preIncrement = ++counter; // preIncrement = 4, counter = 4

console.log(`${postIncrement}, ${preIncrement}, ${counter}`)


// 4. Assignmment operators (할당연산자)

let x = 2;
let y = 3;
x += y; // x = x+y
x -= y; // x = x-y


// 5. Comparison operators (비교연산자)

console.log(10 < 6) // false
console.log(10 > 6) // true


// 6. Logical operators: ||(or), &&(and), !(not)
// ||(or) : 조건 중 하나라도 true면 true (조건 중에 true가 나오면 break >> 연산이 많은 조건을 뒤로, 간단할수록 앞으로 배치)
const T = true;
const F = false;

function smile(){
    for(let i=1; i<=10; i++)
        console.log("😄");
    return true;
}

console.log(`or: ${smile() || T || F } `); //true

// &&(and) : 조건 모두 true면 true (조건 중에 false가 나오면 break(false) >> 연산이 많은 조건을 뒤로, 간단할수록 앞으로 배치)

console.log(`and: ${smile() && T && F } `); //false

// !(not) : 반대값 return
console.log(`${!T}, ${!F}`); // false, true



// 7. Equality operators 

const stringFive = '5';
const numberFive = 5;

// == loose equality(동등 연산자), 타입 상관 X
console.log(stringFive == numberFive); // true

// === strict equality(일치 연산자), 타입 상관 O
console.log(stringFive === numberFive); // false

// object 비교
const ksw1 = { name : 'ksw'};
const ksw2 = { name : 'ksw'};
const ksw3 = ksw1;
console.log(ksw1 == ksw2);  // reference가 다르므로 false
console.log(ksw1 === ksw2); // reference가 다르므로 false
console.log(ksw1 === ksw3); // reference가 같으므로 true 


// 8. If operator (조건연산자)
// if, else if, else

const name_ = 'ksw';
if (name_ === 'kkk'){
    console.log("welcome kkk!");
} else if (name_ === 'ksw') {
    console.log("welcome ksw!");
} else console.log("unknown");


// 9. Ternary operator (삼항연산자)
// 조건 ? trueAction : falseAction ;

console.log(name_==='ksw' ? 'Hi ksw!' : 'unknown'); // name_이 'ksw'면 'Hi ksw!' 출력, 아니면 'unknown' 출력


// 10. Switch statement 

const game = '';
switch(game){
    case 'OverWatch':
        console.log('play OverWatch');
        break;
    case 'BattleGround':
        console.log('play Battle');
        break;
    case 'LOL':
        console.log('play LOL');
        break; 
    default:
        console.log('unknown');
        break;
}


// 11. Loops (반복문)
// while loop

let i=3;
while (i > 0){
    console.log(`while : ${i--}`);
}

//do while loop

do{
    console.log(`while : ${i--}`);
} while (i>0);

// for loop
// for(begin; condition; step)

for(i=3; i>0; i--){
    console.log(i);
}

// nested loops

for(i=1;i<=9;i++){
    console.log(`\n${i}단`)
    console.log(`-------------------`)
    for(let j=1;j<=9;j++){
        console.log(`${i}*${j} = ${i*j} `)
    }
}

//break, continue

for(i=0; i<10;i++){
    if(i%2==1) continue;
    console.log(i);
}
console.log("\n");
for(i=0;i<10;i++){
    if(i==8) break;
    console.log(i);
}