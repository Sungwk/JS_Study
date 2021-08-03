//===================================================================================================
// #10 / JSON (JavaScript Object Notation)
//===================================================================================================


// 1. Object to JSON
// stringfy(obj)

let json = JSON.stringify(true);
console.log(json);

const rabbit = {
  name: 'tori',
  color: 'white',
  size: null,
  birthDate: new Date(),
  jump: () => {
    console.log(`${rabbit.name} can jump!`);
  }, // 함수(메소드)는 JSON에 포함되지 않음
};

json = JSON.stringify(rabbit);
console.log(json);

json = JSON.stringify(rabbit, ["name", "color"]); //원하는 속성만 전달하고 싶을 때 배열형태로 속성 이름 전달
console.log(json);

json = JSON.stringify(rabbit, (key, value)=> {
  return key === 'name' ? 'ellie' : value;
}); // 콜백함수로 오브젝트 내용 통제, 변경 가능
console.log(json);

// 2. JSON to Object

const obj = JSON.parse(json);
console.log(obj);

rabbit.jump();
//obj.jump(); // error 

console.log(rabbit.birthDate.getDate());
// console.log(obj.birthDate.getDate()); >> birthDate가 json으로 바뀔때 string으로 바뀌어서 다시 객체로 바뀔때도 string으로 넘어옴 >> 오류
// 해결방법
const obj2 = JSON.parse(json, (key, value) => {
  return key == 'birthDate' ? new Date(value) : value;
})

console.log(obj2.birthDate.getDate());

console.clear();
//===================================================================================================
// #11 / callback
//===================================================================================================

// 1. 동기(Synchronous), 비동기(Asynchronous)
// 자바스크립트 = 동기 >> 호이스팅된 이후로 코딩된 순서대로 실행

console.log('1');
setTimeout(()=> console.log('2'), 1000) // setTimeout >> 지정한 시간이 지나고 파라미터로 지정한 콜백함수를 실행함 (1000 => 1초) / 브라우저에 요청
console.log('3');

// 1초가 지날동안 3출력을 기다리는것이 아니라 기다림과 동시에 3을 출력함
// 비동기적 실행 async


// 2. 동기적 콜백, 비동기적 콜백

// Synchronous callback
function printImmediately(print){
  print();
} // hoisting으로 인해 맨 위로 끌어올림

printImmediately(() => console.log('hello'));


// Asynchronous callback
function printWithDelay(print, time){
  setTimeout(print, time);
}

printWithDelay(()=>console.log('async!!'), 2000);


//Callback example

class UserStorage{
  loginUser(id, password, onSuccess, onError){
    setTimeout(() => {
      if(
        (id === 'ellie' && password === 'dream')||
        (id === 'coder' && password === 'academy')
      ) {
        onSuccess(id);
      } else {
        onError(new Error('not found'));
      }
    }, 2000); 
  }

  getRoles(user, onSuccess, onError){
    setTimeout(() => {
      if(user === 'ellie') {
        onSuccess({ name: 'ellie', role: 'admin'});
      } else {
        onError(new Error('no access'));
      }
    })
  }
}

const login = new UserStorage();
const id = prompt('enter your id');
const pass = prompt('enter your password');

login.loginUser(id, pass, (user) => {
  login.getRoles(user, (userWithRole => { console.log(userWithRole);}, error => {console.log(error)}))
}, error => {console.log(error)});


// 콜백지옥
// 가독성 떨어짐, 유지보수 어려움
