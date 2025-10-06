/**
 * Узагальнені типи (generics)
 */

// function foo<T>(value: T) {
//   console.log(value);
// }

// foo<number>(5);

// foo<string>("hello");

// foo(false);

// foo([1, 2]);
// foo([1, "hello"]);

// interface User {
//   username: string;
//   age: number;
// }

// foo<User>({ username: "mango", age: 5 });

interface User {
  name: string;
  age: number;
}

/* 1 */
function getFirstElement<T>(arr: T[]): T {
  return arr[0];
}

getFirstElement<number>([10, 20, 30]); // 10
getFirstElement<string>(["Alice", "Bob"]); // "Alice"
getFirstElement<User>([
  { name: "Alice", age: 5 },
  { name: "Bob", age: 2 },
]);

/* 2 */
function shuffle<T>(array: T[]): T[] {
  return array.sort(() => Math.random() - 0.5);
}

const mixedNums = shuffle<number>([1, 2, 3, 4]);
const mixedWords = shuffle<string>(["apple", "banana", "cherry"]);

/* 3 */
function saveToStorage<T>(key: string, value: T) {
  localStorage.setItem(key, JSON.stringify(value));
}

saveToStorage<string>("user", "Jacob Peterson");
saveToStorage<number>("clicks", 8);

function loadFromStorage<T>(key: string): T | null {
  const item = localStorage.getItem(key);
  if (item !== null) {
    return JSON.parse(item) as T;
  }
  return null;
}

const user = loadFromStorage<string>("user");
const clicks = loadFromStorage<number>("clicks");

// const result = JSON.parse("huiowghuiowghiuowghiuowg") as string;

/* 4 */
function max<T>(array: T[], selector: (item: T) => number): T {
  return array.reduce((prev, curr) =>
    selector(curr) > selector(prev) ? curr : prev
  );
}

interface Product {
  name: string;
  price: number;
}

const products: Product[] = [
  { name: "Laptop", price: 1000 },
  { name: "Phone", price: 800 },
];

const mostExpensive = max(products, (p) => p.price);
// → { name: "Laptop", price: 1000 }
