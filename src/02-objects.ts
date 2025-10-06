/**
 * - Типізація об'єктів
 * - Використання interface
 * - Опціональні (?) та readonly поля
 */

interface Order {
  username: string;
  readonly email: string;
  total: number;
  meta?: string;
}

const order1: Order = {
  username: "Jacob",
  email: "j.mercer@mail.com",
  total: 120,
};

const order2: Order = {
  username: "Poly",
  email: "poly@mail.com",
  total: 300,
  meta: "superdata",
};

interface User {
  username: string;
  isOnline: boolean;
  age: number;
}

const jacob: User = {
  username: "Jacob",
  isOnline: false,
  age: 30,
};

const poly: User = {
  username: "Poly",
  isOnline: true,
  age: 20,
};
