const input = prompt('숫자를 입력하세요','0');
const number = Number(input);

if(number % 2 === 0){
 	alert('짝수입니다.')
}
else if (number % 2 === 1){
	alert('홀수입니다.')
}
else {
	alert('숫자를 잘못 입력하였습니다.')
}