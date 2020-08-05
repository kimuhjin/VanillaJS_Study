// | 데이터타입, let vs var, hoisting | //

const { runInThisContext } = require("vm");
const { supportsHistory } = require("history/DOMUtils");

// Hoisting은 어디서 선언했는지에 상관없이 항상 제일 상단에 선언을 끌어 올려주는 것을 뜻한다.
// var는 블럭 스코프가 없어서 어디에서나 사용 할 수 있다.(사용하지 않을 곳에서도 선언되어져 있기때문에, 프로그램 에러 도출의 위험성이 있다.)
// const는 한 번 선언되면 변경할 수 없다. (immutable data)
// let : Mutable, const : Immutable
("symbol, create unique identifiers for objects");
const symbol1 = Symbol("id");
const symbol2 = Symbol("id");
console.log(symbol1 === symbol2); // false;
const symbol1 = Symbol.for("id");
const symbol2 = Symbol.for("id");
console.log(symbol1 === symbol2); // true;
// Symbol.for를 사용하여 두변수가 같은 Symbol을 가지게 하면 두 값이 같다고 나온다.
console.log(symbol1.description); // id;
// Symbol을 출력하려면 .description을 사용하여 출력해야 한다.
("Dynamic typing : dynamically typed language");
let text = "hello";
console.log(text.charAt(0)); // h
// charAt를 사용하여 string의 index값을 통해 해당 인덱스의 문자를 출력할 수 있다.
text = "7" + 5;
console.log(`value: ${text}, type: ${typeof text} `); // value : 75, type: string;
text = "8" / "2";
console.log(`value: ${text}, type: ${typeof text} `); // value : 4, type: number;

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

// | 클래스와 오브젝트의 차이점 (class vs object) | //

// Class
// - template
// - declare once
// - no data in

// Object
// - instance of a class
// -created many times
// -data in

// '클래스'를 이용하여 새로운 인스턴스를 생성하면 '오브젝트'가 된다.
// 클래스는 정의만 한것이라서 메모리에 올라가지는 않지만 오브젝트는 메모리에 올라간다.

// 1. Class declarations
class Person {
  // constructor (생성자)
  // 생성자를 이용해서 나중에 오브젝트를 만들 때 필요한 데이터를 전달한다.
  constructor(name, age) {
    // fields
    // 필드에서 전달된 데이터를 바로 할당해준다.
    this.name = name;
    this.age = age;
  }
  // methods
  speak() {
    console.log(`${this.name}: hello!`);
  }
}

const ellie = new Person("ellie", 20);
console.log(ellie.name); // ellie
console.log(ellie.age); // 20
ellie.speak(); // ellie: hello!

// 2. Getter and setters
class User {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
  get age() {
    return this._age;
  }
  // getter를 사용해서 this.age값을 this._age값으로 리턴하고
  set age(value) {
    this._age = value < 0 ? 0 : value;
    // this.age = age의 age에 할당 될 변수는 value값을 체크하고 가공해서 this._age에 넣어준다.
  }
  // 결국 필드는 firstName,lastName,_age가 된다.
}

const user1 = new User("Steve", "Jobs", -1);
console.log(user1.age); // 0
// .age를 여전히 쓸 수 있는 이유는 getter와 setter를 사용하였기 때문이다.

// 3. Fields (Public, Private)
// 최근에 추가된 것
// 사용하는 개발자도 얼마 없고, 사파리에서는 지원도 안 돼서 babel을 써야지만 사용가능하다.
// 당장 사용하기에는 무리다!
class Experiment {
  // constructor를 쓰지않고 필드를 정의할 수 있다.
  publicField = 2;
  // 그냥 정의하게 되면 외부에서 접근이 가능하고,
  #privateField = 0;
  // 헤쉬기호를 붙이면 프라이빗필드가 되고, 클래스 내부에서만 값이 보여지고 변경이 가능하지만, 클래스 외부에서는 값을 읽을 수도, 변경할 수도 없다.
}
const experiment = new Experiment();
console.log(experiment) = new Experiment();
console.log(experiment.publicField); // 2;
console.log(experiment.privateField); // undefined;

// 4. Static properties and methods
// 최근에 추가된 것
// 당장 사용하기에는 무리다!
class Article {
  static publisher = "Dream Coding";
  constructor(articleNumber) {
    this.articleNumber = articleNumber;
  }
  static printPublisher() {
    console.log(Article.publisher);
  }
}
const article1 = new Article(1);
const article2 = new Article(2);
console.log(article1.publisher); // undefined
console.log(Article.publisher); // Dream Coding

// 오브젝트와 들어오는 데이터와 상관없이, 공통적으로 클래스에서 쓸수있는거라면, static과 static 메소드를 이용하여 작성하는 것이 메모리에 사용을 조금 더 줄여줄 수 있다.

// 5. Inheritance
// a way for one class to extend another class.
class Shape {
  constructor(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;
  }
  draw() {
    console.log(`drawing ${this.color} color of`);
  }
  getArea() {
    return this.width * this.height;
  }
}
class Rectangle extends Shape {}
// extends를 사용하면 Shape에 대한 모든 것들이 Rectangle에 포함이 된다.
class Triangle extends Shape {
  // Overriding
  // 필요한 함수들만 오버라이딩 해서 편집하여 사용할 수 있다.
  draw() {
    super.draw(); // super를 사용하여 부모의 메소드도 사용할 수 있다.
    console.log("삼각형");
  }
  getArea() {
    return (this.width * this.height) / 2;
  }
  toString() {
    return `Triangle: color: ${this.color}`;
  }
}
const rectangle = new Rectangle(20, 20, "blue");
rectangle.draw(); // drawing blue color of
const triangle = new Rectangle(20, 20, "red");
triangle.draw(); // drawing red color of
console.log(triangle.getArea()); // 200
console.log(triangle.draw()); // drawing red color of // 삼각형

// 6. Class checking: instanceOf
console.log(rectangle instanceof Rectangle); // true
// instanceof를 통해 rectangle이 Rectangel이라는 클래스를 통해 만들어진 인스턴스인지 확인 한다.
console.log(triangle instanceof Rectangle); // false
console.log(triangle instanceof Triangle); // true
console.log(triangle instanceof Shape); // true
console.log(triangle instanceof Object); // true
// 자바스크립트의 모든 오브젝트는 Object를 상속한것이므로 true이다.
console.log(triangle.toString()); // Triangle: color: red
