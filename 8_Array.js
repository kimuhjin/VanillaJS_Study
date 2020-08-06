// 1. Declaration 선언
const arr1 = new Array();
const arr2 = [1, 2];

// 2. Index position
const fruits = ["apple", "banana"];
console.log(fruits); // ["apple", "banana"]
console.log(fruits.length); // 2
console.log(fruits[0]); // apple
console.log(fruits[3]); // undefined
console.log(fruits[fruits.length - 1]); // banana
// fruits.length-1를 통해 배열의 마지막 원소를 받아올 수 있다.

// 3. Looping over an array
// print all fruits
// a. for
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]); // apple | banana
}

// b. for of
for (let fruit of fruits) {
  console.log(fruit); // apple | banana
}

// c. forEach
fruits.forEach((fruit, index) => console.log(fruit, index)); // apple 0 | banana 1

// 4. Addition, deletion, copy

// push: add an item to the end
fruits.push("a", "b");
console.log(fruits); // ["apple", "banana", "a", "b"]

// pop: remove an item to the end
fruits.pop();
console.log(fruits); // ["apple", "banana", "a"]
fruits.pop();
console.log(fruits); // ["apple", "banana"]

// unshift: add an item to the beginning
fruits.unshift();
console.log(fruits); // ["a", "b", "apple", "banana"]

// shift: remove an item to the beginning
fruits.shift();
console.log(fruits); // ["b", "apple", "banana"]
fruits.shift();
console.log(fruits); // ["apple", "banana"]

// note!! shift, unshift are much slower than pop, push.
// shift와 unshift는 배열을 하나씩 당겨와 넣기 때문에 배열이 길면 길수록 당겨오는 반복작업이 많아져 속도가 느려진다.

// splice: remove an item by index position
fruits.push("a", "b", "c");
console.log(fruits); // ["apple", "banana", "a", "b", "c"]
fruits.splice(1);
console.log(fruits); // ["apple"]
// endpoint를 지정해주지 않으면 인자의 해당 인덱스부터 끝까지 다 지우게 된다.
fruits.splice(1, 1);
console.log(fruits); // ["apple", "a", "b", "c"]
// endpoint를 지정해주면 인자의 해당 인덱스만 지우게 된다.
fruits.splice(1, 1, "d", "e");
console.log(fruits); // ["apple", "d", "e", "a", "b", "c"]
// endpoint뒤의 인자 값은 해당 배열에 해당 인덱스에 해당 인자값을 추가하게 된다.

// combine two arrays
const fruits2 = ["1", "2"];
const newFruits = fruits.concat(fruits2);
console.log(newFruits); // ["apple", "d", "e", "a", "b", "c", "1", "2"]

// 5. Searching
// indexOf: find the index
console.log(fruits); // ["apple", "d", "e", "a", "b", "c"]
console.log(fruits.indexOf("apple")); // 0
console.log(fruits.indexOf("e")); // 2
console.log(fruits.indexOf("f")); // -1 (배열에 해당 값이 없으면 -1을 리턴한다.)
// includes
console.log(fruits.includes("e")); // true
console.log(fruits.includes("f")); // false

//lastIndexOf
console.log(fruits); // ["apple", "d", "e", "a", "b", "c"]
fruits.push("apple");
console.log(fruits); // ["apple", "d", "e", "a", "b", "c" ,"apple"]
console.log(fruits.indexOf("apple")); // 0
console.log(fruits.LastIndexOf("apple")); // 6 (배열의 마지막에 있는 인덱스값을 리턴한다.)
