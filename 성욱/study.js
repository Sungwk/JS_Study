let text='';
let i = 0;

for (i = 0; i < 10; i++) {
  for (let k = 9 - i; k >= 0; k--) {
    text += ' ';
  }
  for (let j = 0; j < i * 2 - 1; j++) {
    text += '*';
  }
  text += '\n';
}
for (i = 8; i >= 0; i--){
  for (let k = 0; k <= 9-i; k++) {
    text += ' ';
  }
  for (let j = i * 2 - 2; j >=0; j--) {
    text += '*';
  }
  text += '\n';
}
console.log(text);


 