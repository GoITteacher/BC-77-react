/**
 * - Типізація функцій
 * - Типізація аргументів
 * - Тип значення, яке повертає функція
 * - Опціональні параметри
 */

interface User {
  username: string;
  age: number;
}

const users: User[] = [
  { username: "poly", age: 20 },
  { username: "jacob", age: 30 },
  { username: "mango", age: 25 },
];

function getUserNames(items: User[]): string[] {
  return items.map((item) => item.username);
}

const names = getUserNames(users);

function greet(username: string, age?: number) {
  if (age !== undefined) {
    //  username, age
  } else {
    // username
  }
}

greet("poly", 15);

greet("jacob");
