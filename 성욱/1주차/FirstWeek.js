
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