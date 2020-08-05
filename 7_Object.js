// Objects
// one of the JavaScript's data types.
// a collection of related data and/or functionality.
// Nearly all objects in JavaScript are instances of Object.
// object = { key : value };

// 1. Literals and properties
const obj1 = {}; // 'object literal' syntax
const obj2 = new Object(); // 'object constructor' syntax

const ellie = { name: "ellie", age: 4 };
ellie.hasJob = true;
console.log(ellie.hasJob); // true
// JS는 Dynamically Type Language이기 때문에 타입이 동적으로 Runtime(프로그램이 동작할 때)때 결정되는 언어이기때문에 위와 같이 뒤늦게 property를 추가 할 수 있다.

delete ellie.hasJob;
console.log(ellie.hasJob); // undefined;
// 삭제 또한 가능하다.

// 2. Computed properties
// key should be always string
console.log(ellie.name); // ellie
console.log(ellie["name"]); // ellie
// Computed Property로 찍음.
ellie["hasJob"] = true;
console.log(ellie.hasJob); // true
function PrintValue(obj, key) {
  console.log(obj.key); // undefined
  console.log(obj[key]); // ellie
}
PrintValue(ellie, "name");
// 실시간으로 원하는 값을 받아오고 싶다면 Computed properties를 쓰면 된다.
// 동적으로 키의 벨류를 받아올 때 유용하게 쓰인다.

// 3. Property value shorthand
const person1 = { name: "bob", age: 2 };
const person2 = { name: "steve", age: 3 };
const person3 = { name: "dave", age: 4 };
const person4 = new Person("ellie", 30);
function MakePerson(name, age) {
  return {
    name,
    age,
    // JS에선 키와 벨류의 이름이 같다면 하나로 생략할 수 있다.
  };
}
// 4. Constructor Function
function person(name, age) {
  this.name = name;
  this.age = age;
}
// Class처럼 템플릿을 만들어 파라미터를 받고 객체로 리턴한다.

// 5. in operator: property existence check (key in obj)
// 키가 있는지 확인 할 수 있다.
console.log("name" in ellie); // true;

// 6. for..in vs for..of
// for (key in obj)
for (key in ellie) {
  console.log(key); // name | age | hasJob
}

// for (value of iterable)
const array = [1, 2, 4, 5];
for (let i = 0; i < array.length; i++) {
  console.log(array[i]); // 1 | 2 | 4 | 5
}
// 위 코드를 간단하게 작성하면 아래와 같다.
for (value of array) {
  console.log(value); // 1 | 2 | 4 | 5
}

// 7. Fun cloning
// Object.assign(dest,[obj1, obj2, obj3...])
const user = { name: "ellie", age: "20" };
const user2 = user;
user2.name = "coder";
console.log(user); // {name: "coder", age: "20"}
// user과 user2가 같은 객체를 바라보기때문에 다 변경된다.

// Old way
const user3 = {};
for (key in user) {
  user3[key] = user[key];
}
console.log(user3); // {name: "coder", age: "20"}

// New way
const user4 = Object.assign({}, user);
console.log(user4); // {name: "coder", age: "20"}

// another example
const fruit1 = { color: "red" };
const fruit2 = { color: "blue", size: "big" };
const mixed = Object.assign({}, fruit1, fruit2); // 뒤에있는 인자값으로 값이 계속 덮혀 쓰여지게 된다.
console.log(mixed.color); // blue
console.log(mixed.size); // big
