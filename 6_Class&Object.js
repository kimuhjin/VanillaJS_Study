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
console.log(triangle.draw()); // drawing red color of | 삼각형

// 6. Class checking: instanceOf
console.log(rectangle instanceof Rectangle); // true
// instanceof를 통해 rectangle이 Rectangel이라는 클래스를 통해 만들어진 인스턴스인지 확인 한다.
console.log(triangle instanceof Rectangle); // false
console.log(triangle instanceof Triangle); // true
console.log(triangle instanceof Shape); // true
console.log(triangle instanceof Object); // true
// 자바스크립트의 모든 오브젝트는 Object를 상속한것이므로 true이다.
console.log(triangle.toString()); // Triangle: color: red
