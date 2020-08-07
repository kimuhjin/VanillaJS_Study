// fetch() API는 인터넷 익스플로어에서 작동하지 않는다.
// JSON: JavaScript Object Notation
// - simplest data interchange format
// - lightweight text-based structure
// - easy to read
// - key-value pairs
// - used for serialization(직렬화) and transmission of data between the network the network connection
// - independent programming language and platform

// 1. Object to JSON
// stringify(obj)
let json = JSON.stringify(true);
console.log(json); // true

json = JSON.stringify(["apple", "banana"]);
console.log(json); // ["apple","banana"] (쌍따옴표로 묶이는게 JSON 표준 규격이다.)

const rabbit = {
  name: "tori",
  color: "white",
  size: "null",
  birthDate: new Date(),
  jump: () => {
    console.log(`${this.name} can jump!`);
  },
};

json = JSON.stringify(rabbit);
console.log(json); // {"name":"tori","color:"white"...}
//Symbol이나 함수는 serialization되지 않아 JSON으로 출력 되지 않는다,

json = JSON.stringify(rabbit, ["name", "color"]);
console.log(json); // {"name":"tori","color":"white"}

json = JSON.stringify(rabbit, (key, value) => {
  console.log(`key:${key}, value:${value}`); // key: , value :[object Object] (제일 처음엔 JSON을 감싸는 최상위 계층이 표시된다.) | key : name, value: tori | ...
  return key === "name" ? "ellie" : value;
});
console.log(json); // {"name":"ellie","color:"white"...}

// 2. JSON to Object
// parse(json)
json = JSON.stringify(rabbit);
const obj = JSON.parse(json);
console.log(obj); // {"name":"tori","color:"white"...}

console.log(rabbit.birthDate.getDate()); // 7
console.log(obj.birthDate.getDate()); // Error! (getDate is not a function)
// obj는 JSON으로 변환된 데이터가 들어가 있기 때문에, 안에 내용물이 스트링으로 저장되어 있어, 함수를 호출 하지 못한다.

const obj = JSON.parse(json, (key, value) => {
  console.log(`key:${key}, value:${value}`);
  return key === "birthDate" ? new Date(value) : value;
}); // reviver라는 콜백함수를 전달 받아 key값이 birthDate라면 Date라는 새로운 오브젝트를 만들어서 저장한다.
console.log(obj.birthDate.getDate()); // 7
