'use strict';

//===================================================================================================
// #12 / Promise (자바스크립트의 내장객체 / 비동기를 위해 콜백함수 대신 사용 가능한...)
//===================================================================================================


// 1. Producer
// 기능을 수행한 경우(resolve)와 실패한 경우(reject) 호출할 두가지 콜백함수를 파라미터로 받아서 선언
// Promise(execute(resolve(), reject()))

// promise 선언
const promise = new Promise((resolve, reject) => {
  //doing some heavy work >> 오래 걸리는 연산들은 비동기적으로 처리해야함
  console.log('doing something...')
  
  // 새로운 프로미스가 만들어지는 순간 executer 콜백함수가 실행 됨
  setTimeout(() => {
    // resolve('ellie');
    reject(new Error('no network'))
  }, 2000);
  
});


// 2. Consumers : then, catch, finally를 통해 값을 받아옴

promise
  .then((value) => {
    console.log(`Hi ${value}`);
  })
  .catch(error => {
    console.log(error);
  })
  .finally(() => {
    console.log('finally');
  });


// 3. Promise chaning

const fetchNumber = new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 1000);
});

fetchNumber
  .then(num => num * 2) // 2
  .then(num => num * 3) // 6
  .then(num => {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(num - 1), 1000);
    });
  }) // 5
  .then(console.log); // num 생략가능

  // then >> 값, 프로미스 전달 가능!!


// 4. Error Handling

const getNum = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 1000);
  });
const NumAddTwo = num =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(num+2), 1000);
  });
const NumMultiplyThree = num =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(num * 3), 1000);
  });


getNum()
  .then(num => NumAddTwo(num))
  .then(num => NumMultiplyThree(num))
  .catch(error => { return 9999; })
  .then(num => console.log(num));



//===================================================================================================
// #13 / async & await (clear style of using promise)
//===================================================================================================

// 1. async

function fetchUser() {
  return new Promise((resolve, reject) => {
    resolve('ellie');
  });
}

async function fetchUser_2() {
  return 'elllie';
}

const user = fetchUser();
user.then(console.log);

const user2 = fetchUser_2();
user2.then(console.log);


// 2. await 


function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function getApple() {
  await delay(2000);
  return 'apple';
}

async function getBanana() {
  await delay(1000);
  return 'banana';
}

async function pickFruits() {
  const applePromise = getApple();
  const bananaPromise = getBanana();
  const apple = await applePromise;
  const banana = await bananaPromise;

  return apple + banana;
}

pickFruits().then(console.log);


// 3. useful Promise APIs

function pickAllFruits() {
  return Promise.all([getApple(), getBanana()])
    .then(frutis => frutis.join(' + '));
}

pickAllFruits().then(console.log);

function pickOnlyOne() {
  return Promise.race([getApple(), getBanana()]);
}

pickOnlyOne().then(console.log);