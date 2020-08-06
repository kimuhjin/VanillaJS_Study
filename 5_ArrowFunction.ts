// Function

// - fundamental building block in the program
// - subprogram can be used multiple times
// - performs a task or calculates a value

// 1. Function declaration
// function name(param1, param2) { body... return; }
// one function === one thing
// naming: doSomething, command, verb
// e.g createCardAndPoint -> createCard, createPoint
// function is object in JS

function printHello() {
  console.log("Hello");
}
printHello();

function log(message) {
  console.log(message);
}
log("Hello!"); // Hello!

function TypeScriptLog(message: string) {
  // Typescript
  console.log(message);
}
log("Hello!"); // Hello!

// 2. Parameters
// premitive parameters: passed by value
// object parameters: passed by reference
function changeName(obj) {
  obj.name = "coder";
}
const ellie = { name: "ellie" };
changeName(ellie);
console.log(ellie); // {name: "coder"}

// 3. Default parameters (added in ES6)
function showMessage(message, from = "unknown") {
  console.log(`${message} by ${from}`);
}
showMessage("Hi!"); // Hi! by unknown
// 파라미터에 디폴트 값을 할당해서, 만약에 해당 파라미터값이 없다면 디폴트 값으로 쓰게끔 할 수 있다.

// 4. Rest parameters (added in ES6)
function printAll(...args) {
  // '...파라미터'로 받아오면 배열 형태로 전달 되게 된다.
  // !!! 내술노트 과거 검색어 저장로직에서 해당 문자열을 스프레드로 받아와 배열 형태로 전달하고, filter를 통해 타겟팅 된 검색어를 삭제할 수 있게 한다.
  for (let i = 0; i < args.length; i++) {
    console.log(args[i]);
  }
  for (const arg of args) {
    console.log(arg);
  }
  // of를 써서 배열 순회하면서 리턴
  // 위와 기능 같음
  args.forEach((arg) => console.log(arg));
  // forEach를 써서 배열 순회하면서 리턴
  // 위와 기능 같음
}
printAll("dream", "coding", "ellie");

// 5. Local scope
// 밖에서는 안이 보이지 않고, 안에서만 밖을 볼 수 있다.
let globalMessage = "global"; // global variable
function printMessage() {
  let message = "hello";
  console.log(message); // local variable
  console.log(globalMessage);
}
printMessage();

// 6. Return a value
// return은 생략 할 수 있는데, 생략한다면 return undefined로 자동 지정 되게 된다.
function sum(a, b) {
  return a + b;
}
const SumResult = sum(1, 2);
console.log(`sum: ${sum(1, 2)}`); // sum: 3

// 7. Early return, early exit
// Bad
function BadUpgradeUser(user) {
  if (user.point > 10) {
    // long upgrade logic...
  }
}

// Good
function GoodUpgradeUser(user) {
  if (user.point <= 10) {
    return;
  }
  // long upgrade logic...
}
// 먼저 false인 경우를 먼저 정의해서 값이 아닐 경우 빠르게 함수를 빠져나오게 하고, 해당하는 값이 나올 경우 그 뒤에 로직을 붙여 함수를 최적화 한다. (현업 지식!)

// First-class function

// functions are treated like any other variable
// can be assigned as a value to variable
// can be passed as an argument to other functions
// can be returned by another function

// 1. Function expression
// a function declaration can be called earlier than it is defined (hoisted)
// a function expression is created when the execution reaches it.
const printing = function () {
  // anonymous function, 함수의 이름이 없는 것
  console.log("print");
};
printing();
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1, 3)); // sum: 4
// 함수를 정의함과 동시에 변수에 할당하게 되면 Function expression이고, 함수를 선언하기만 하면 Function declaration이다.
// function expression을 사용하게 된다면, 해당 함수가 할당된 변수를 선언전에 사용 할 수 없지만, function declaration을 사용하면 JS 엔진에서 자동으로 해당 함수를 호이스팅 해줘 (함수를 자동으로 맨 위로 올려주는 것) 함수 윗줄에서도 사용 가능하다.

// 2. Callback function using function expression
function randomQuiz(answer, printYes, printNo) {
  if (answer === "love you") {
    printYes();
  } else {
    printNo();
  }
}
// anonymous function
const printYes = function () {
  console.log("yes!");
};
// named function
// better debugging in debugger's stack traces
// recursions, 함수 안에서 함수 자신 스스로를 호출 하는 것. 피보나치수를 계산하거나, 반복되는 평균값을 계산한다던지, 필요한 경우에만 사용한다. 정확한 쓰임 이외에 사용한다면 Maximum call stack이 되어 프로그램이 다운된다.
const printNo = function () {
  console.log("no!");
};
randomQuiz("wrong", printYes, printNo);
randomQuiz("love you", printYes, printNo);

// Arrow function
// always anonymous
const simplePrint = () => console.log("simplePrint!");
const add = (a, b) => {
  // do something more
  return a * b;
};

// IIFE: Immediately Invoked Function Expression
(function hello() {
  console.log("IIFE");
})();
// 해당 함수를 괄호로 묶고, 함수를 호출 하듯이 뒤에 ()를 붙여주면, 바로 따로 호출하지 않아도 바로 호출하게 된다.
// 잘 쓰이진 않지만 JS에서 바로 호출하고 싶을 때 유용하게 사용된다.
