// 1. join : 배열.join('구분자'(생략가능)) >> 배열 내의 요소들을 string으로 합치는데 요소 사이마다 구분자로 구분(구분자 생략 가능) 
// Q1. make a string out of an array 
{
  const fruits = ['apple', 'banana', 'orange'];

  const result = fruits.join(' ');
  console.log(result);

}

// 2. split : 문자열.split(구분자, 배열 사이즈(생략가능)) >> 문자열 내의 구분자로 나뉘어진 부분을 배열의 한 요소로 삽입
// Q2. make an array out of a string
{
  const fruits = '🍎, 🥝, 🍌, 🍒';
  
  const fruitArray = fruits.split(',');
  console.log(fruitArray);

}

// 3. reverse : 배열.reverse() >> 배열 내의 요소 순서 뒤집기
// Q3. make this array look like this: [5, 4, 3, 2, 1]
{
  const array = [1, 2, 3, 4, 5];

  
  array.reverse();
  console.log(array);
}

// Q4. make new array without the first two elements
{
  const array = [1, 2, 3, 4, 5];
  
  /*splice
  array.splice(0,2);
  console.log(array);
*/

  // 4. slice : 배열.slice(startIndex, lastIndex+1) >> startIndex부터 lastIndex까지의 배열 return
  const result = array.slice(2,5);
  console.log(result);
  console.log(array);

}

class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}
const students = [
  new Student('A', 29, true, 45),
  new Student('B', 28, false, 80),
  new Student('C', 30, true, 90),
  new Student('D', 40, false, 66),
  new Student('E', 18, true, 88),
];

// Q5. find a student with the score 90
{
  for(let i=0;i<students.length;i++){
    if(students[i].score === 90)
      console.log(students[i]);
  }

  // 5.find >> 함수의 리턴 값이 true인 첫번째 요소를 찾음. 없으면 undefined
  const result = students.find((student) => student.score === 90);
  console.log(result);
}

// Q6. make an array of enrolled students
{
  const result = [];
  for(let i=0;i<students.length;i++){
    if(students[i].enrolled)
      result.push(students[i]);
  }
  console.log(result);

  // 6. filter
  const result_ = students.filter((student) => student.enrolled);
  
  console.log(result_);
}

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
{
  // 7. map
  const result = students.map((student) => student.score);
  console.log(result);
}

// Q8. check if there is a student with the score lower than 50
{
  // 8. some, every : some >> 요소가 하나라도 true면 true / every >> 요소 모두가 true면 true 
  const result = students.some((student) => student.score<50);
  console.log(result);
}

// Q9. compute students' average score
{
  // 9. reduce
  const result = students.reduce((prev , curr) => prev + curr.score, 0)/students.length;
  console.log(result);
}

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
  const result = students.map((student) => student.score).join();
  console.log(result);
}

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{
  // sort : sort((a,b) => a-b) >> a = 이전값, b = 현재값  / 작은것부터 정렬 >> a-b , 큰것부터 정렬 >> b-a
  const result = students.map((student) => student.score).sort((a,b) => a-b).join(', ');
  console.log(result);
}