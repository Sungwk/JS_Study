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