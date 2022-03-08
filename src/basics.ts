// Primitives

export let age: number;

age = 12;

let userName: string | string[];

userName = "perfume";

let isFrontend: boolean;

isFrontend = true;

// More complex types

let hobbies: string[];

hobbies = ["Reading books", "Watch movie", "Cooking"];

type Person = {
  name: string;
  gender: string;
};

let person: Person;

person = {
  name: "Perfume",
  gender: "female",
};

let people: Person[];

// type inference

let course: string | number = "React - The complete Guide";

course = 12341;

// Functions & types

function add(a: number, b: number) {
  return a + b;
}

function print(value: any) {
  console.log(value);
}

//Generics

// function insertAtBeginning(array: any[], value: any) {
//   const newArray = [value, ...array];
//   return newArray;
// }

//위와 같이 하면 value가 앞에 추가된 새로운 배열을 만들 수 있다. 기존의 배열은 바뀌지 않고.
// 하지만 위의 타입대로라면 타입스크립트가 타입에러를 잡아주는 효과를 전혀 누릴 수 없다.
// any[]가 아니라 number[]로 바꾸면 아래처럼 demoArray 같은 건 넣을 수 없게 된다.
// 그래서 쓰이는게 Generic!

function insertAtBeginning<T>(array: T[], value: T) {
  const newArray = [value, ...array];
  return newArray;
}

//이렇게 하면 value와 같은 타입을 가진 것들의 배열이라는 것을 알려줄 수 있다.

const demoArray = [1, 2, 3];

const updateArray = insertAtBeginning(demoArray, 0); // [0,1,2,3]
const stringArray = insertAtBeginning(["a", "b", "c"], "d");
