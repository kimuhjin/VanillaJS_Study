// | 데이터타입, let vs var, hoisting | //

// Note!
// Immutable data types: primitive types, frozen objects (i.e object.freeze())
// Mutable data types: all objects by default are mutable in JS
// favor immutable data type always for a few reason:
// - security
// - thread safety
// - reduce human mistakes

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
