// 1. String concatenation
console.log("my" + "cat"); // my cat;
console.log("1" + 2); // 12;
console.log(`string literals: 1 + 2 = ${1 + 2}`); // string literals: 1 + 2 = 3;

// 2. Numeric operators
console.log(1 + 1); // add | 2
console.log(1 - 1); // subtract | 0
console.log(1 / 1); // divide | 1
console.log(1 * 1); // multiply | 1
console.log(5 & 2); // remainder | 1
console.log(2 ** 3); // exponentiation | 8

// 3. Increment and decrement operators
let counter = 2;
const preIncrement = ++counter;
// counter = counter + 1;
// preIncrement = counter;
const postIncrement = counter++;
// postIncrement = counter;
// counter = counter + 1;
// 기호가 앞에있으면 바로 업데이트 돼서 할당이 되고, 뒤에 있으면 할당을 해놓고 그 뒤에 업데이트 한다.

// 4. Assignment operators
let x = 3;
let y = 6;
x += y; // x = x + y;
x -= y;
x *= y;
x /= y;

// 5. Comparison operators
console.log(10 < 6); // less than
console.log(10 <= 6); // less than or equal
console.log(10 > 6); // greater than
console.log(10 >= 6); // greater than or equal

// 6. Logical operators : || (or), && (and), ! (not)
const value1 = true;
const value2 = 4 < 2;
function check() {
  for (let i = 0; i < 10; i++) {
    // wasting time
    console.log("wait");
  }
  return true;
}
// || (or), finds the first truthy value
console.log(`or: ${value1 || value2 || check()}`); // true;
// || 연산자는 제일 첫번째 인자값이 true이면 바로 true를 반환하므로, 함수와 같이 무거운 것들은 최대한 제일 뒷단에 넣어주는것이 좋다.

// && (and), finds the first falsy value
console.log(`or: ${value1 && value2 && check()}`); // false;
// && 연산자도 제일 첫번째 인자값이 false면 바로 false를 반환하므로, 함수와 같이 무거운 것들은 최대한 제일 뒷단에 넣어주는것이 좋다.

// often used to compress long if-statement
// nullableObject && nullableObject.something
if (nullalbeObject != null) {
  nullalbeObject.something;
}
// && 연산자 앞에가 null이 아니라면 연산자 뒤에 값으로 받아온다.

// ! (not)
console.log(!value1); // false

// 7. Equality
const stringFive = "5";
const numberFive = 5;

// == loose equality, with type conversion;
console.log(stringFive == numberFive); // true
console.log(stringFive != numberFive); // false

// === strict equality, no type conversion;
console.log(stringFive === numberFive); // false
console.log(stringFive !== numberFive); // true

// object equality by reference
// object는 메모리에 탑제될 때 레퍼런스 형태로 저장 된다.
const ellie1 = { name: "ellie" };
const ellie2 = { name: "ellie" };
// 메모리에는 ellie1과 ellie2가 다른 레퍼런스에 저장 된다.
const ellie3 = ellie1;
console.log(ellie1 == ellie2); // false
console.log(ellie1 === ellie2); // false
console.log(ellie1 === ellie3); // true

// equality = puzzler
console.log(0 == false); // true
console.log(0 === false); // false
console.log("" == false); // true
console.log("" === false); // false
console.log(null == undefined); // true
console.log(null === undefined); // false

// 8. Conditional operators: if
// if, else if, else
const name = "coder";
if (name === "ellie") {
  console.log("Welcome, ellie");
} else if (name === "coder") {
  console.log("Welcome, coder");
} else {
  console.log("unknown");
} // welcome, coder

// 9. Ternary operation : ?
// condition ? value1 : value2;
console.log(nane === "ellie" ? "yes" : "no"); // no
// 묶어 쓰지말고, 간단하게 사용할 때만 쓴다.

// 10. Switch statement
// use for multiple if checks
// use for enum-like value check
// use for multiple type checks in TS
const browser = "IE";
switch (browser) {
  case "IE":
    console.log("go away!");
    break;
  case "Chrome":
  case "FireFox":
    // case 두개의 리턴값이 같다면, 위와 같이 묶어서 써도 된다.
    console.log("come on!");
    break;
  default:
    console.log("same all!");
    break;
}

// 11. Loops
// while loop, while the condition is truthy,
// body code is executed.
let i = 3;
while (i > 0) {
  console.log(`while: ${i}`);
  i--;
}
// while : 3 | while : 2 | while : 1

// do while loop, body code is executed first,
// then check the condition
do {
  console.log(`do while: ${i}`);
} while (i > 0);
// do while: 0
// 블럭을 먼저 실행하고 싶다면, do while을 사용하고, 조건문이 맞을때만 블럭을 실행하고 싶다면 while을 사용한다.

// for loop, for(begin; condition; step)
for (i = 0; i > 0; i--) {
  console.group(`for: ${i}`);
}
// for: 3 | for: 2 | for: 1

for (let i = 3; i > 0; i = i - 2) {
  // inline variable declaration (지역변수 선언)
  console.log(`inline variable for: ${i}`);
}

// nested loops
for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 10; j++) {
    console.log(`i: ${i}, j:${j}`);
  }
}

// break, continue
// Q1. iterate from 0 to 10 and print only even numbers (use continue)
for (let i = 0; i < 11; i++) {
  if (i % 2 !== 0) {
    continue;
  }
  console.log(`${i}`); // 0 | 2 | 4 | 6 | 8
}
// Q2. iterate from 0 to 10 and print numbers until reaching 8 (use break)
for (let i = 0; i < 11; i++) {
  if (i > 8) {
    break;
  }
  console.log(`${i}`); // 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8
}
