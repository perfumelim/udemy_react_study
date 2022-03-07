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
