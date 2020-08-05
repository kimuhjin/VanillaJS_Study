// | 유용한 10가지 배열 함수들. Array APIs 총정리 | //
("1. 배열의 내용을 스트링으로 리턴");

const fruits = ["apple", "banana", "orange"];
const result = fruits.join();
console.log(result); // apple,banana,orange
// 구분자가 없으면 자동으로 ','을 추가 해준다.
const result = fruit.join("|");
console.log(result); // apple|banana|orange

("2. 스트링을 배열로 리턴");
const fruits = "apple, banana, orange";
const result = fruits.split(",");
console.log(result); // ["apple", "banana", "orange"]
// 구분자를 안 넣어주면 배열에 ["apple, banana, orange"] 이렇게 들어간다.
const result = fruits.split(",", 2);
console.log(result); // ["apple", "banana"]
// split의 두번째 파라미터값 Limit에  숫자를 넣어주면 해당 index까지만 배열에 들어간다,

("3. 배열의 내용을 반대로 만들기");
const array = [1, 2, 3, 4, 5];
const result = array.reverse();
console.log(result); // [5,4,3,2,1];
console.log(array); // [5,4,3,2,1];
// ! 오리지널 배열로 reverse되게 된다.

("4. 특정갯수의 원소를 제거한 새로운 배열 만들기");
const array = [1, 2, 3, 4, 5];
const result = array.splice(0, 2);
console.log(result); // [1,2]
console.log(array); // [3,4,5]
// ! splice를 사용하면 오리지널 배열이 변형된다.
const result = array.slice(2, 5);
// slice의 첫번째 파라미터는 추출하고 싶은 index의 start, 두번째는 index의 end이다.
console.log(result); // [3,4,5]
console.log(array); // [1,2,3,4,5]
// splice는 배열 자체를 수정할 때 사용하고, slice는 배열의 원하는 부분만 리턴하고 싶을 때 사용한다.

("class 배열 조작");
class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}
const students = [
  new Student("A", 29, true, 45),
  new Student("B", 28, false, 80),
  new Student("C", 30, true, 90),
  new Student("D", 40, false, 66),
  new Student("E", 18, true, 88),
];
("5. 90점 이상인 학생을 찾는 법");
const result = students.find((student) => student.score === 90);
console.log(result); // Student {name:"C", age:30, enrolled:true, score:90}
// find() 오퍼레이션을 사용하면 해당 배열에 콜백함수로 넣어준 값과 찾는 값이 동일하다면 true가 되면서 해당값을 리턴하게 되고, 동일하지 않다면 false가 되어 다음 index를 차례로 조회하게 된다.

("6. 수업을 등록한 학생만 찾아서 배열로 만들기");
const result = students.filter((student) => student.enrolled);
console.log(result); // [Student {name:"A", age:29, enrolled:true, score:45}, Student {name:"C", age:30, enrolled:true, score:90}, Student {name:"E", age:18, enrolled:true, score:88}]
// filter를 사용하면 콜백함수로 넣어준 값과 동일한 인자들만을 체크하여 새로운 배열로 리턴해준다.

("7. 학생들의 점수만 들어있는 배열 만들기");
const result = students.map((student) => student.score);
console.log(result); // [45, 80, 90, 66, 88];

("8. 점수가 50점 미만인 학생이 있는지 확인하기");
const result = students.some((student) => student.score < 50);
console.log(result); // true
// some을 사용하면 배열의 모든 값들을 원하는 값과 비교하여 해당 값이 있다면 T, 없다면 F 값으로 리턴한다.
const result = students.every((student) => student.score < 50);
console.log(result); // false
// every를 사용하면 배열의 모든 값들을 원하는 값과 비교하여 원소들의 값들이 해당 값과 모두 같다면 T, 하나라도 다르다면 F를 리턴한다.

("학생들의 평균 점수 구하기");
const result = students.reduce((prev, curr) => prev + curr.score, 0);
// initialValue에 0을 넣어주면 배열 원소값의 누적을 0부터 시작하게 된다. (넣지 않으면 첫번째 prev값이 student A가 된다)
// 0,A | A,B | B,C | C,D | D,E | 순서로 누적하게 되고
// 0 + A.score
// => (0 + A.score) + B.score
// => (0 + A.score + B.score) + C.score
// => (0 + A.score + B.score + C.score) + D.score
// => (0 + A.score + B.score + C.score + D.score) + E.score 순서로 누적하게 된다.
console.log(result / students.length); // 73.8;
const result = students.reduceRight((prev, curr) => prev + curr.score, 0);
// reduceRight를 사용하면 순서가 거꾸로 호출 되게 된다.

("학생들의 모든 점수를 스트링으로 만들기");
const result = students.map((student) => student.score).join();
console.log(result); // 45, 80, 90, 66, 88;
const result = students
  .map((student) => student.score)
  .filter((score) => score >= 50)
  .join();
console.log(result); // 80, 90, 66, 88;
// 위와 같이 오퍼레이션들을 묶어서 사용할 수 있다.

("학생들의 모든 점수를 거꾸로 리턴하기");
const result = students
  .map((student) => student.score)
  .sort((a, b) => a - b)
  .join();
console.log(result); // 45, 66, 80, 88, 90;
// sort에서 콜백함수에 이전값과 현재 값이 전달이 되는데, return 된 값이 마이너스 값이라면 첫번째 값이 뒤에 것보다 작다고 간주가 되어져서 정렬이 된다.
students.sort((a, b) => b - a);
// b - a를 하게 되면 플러스 값이 나오기 때문에 점수가 높은것이 먼저 나오고 낮은게 뒤에 나온다.
