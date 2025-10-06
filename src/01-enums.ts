/**
 * Перелічення (enum)
 *
 * Enum - це список іменованих констант, які можна використовувати як змінні.
 * Union Type - це просто список допустимих значень, які можна присвоювати змінним.
 *
 * Якщо не знаєш, що вибрати - завжди починай з union type.
 * Enum варто використовувати лише тоді, коли є реальна потреба в цьому.
 */

// type Status = "pending" | "fulfilled" | "rejected";

enum Status {
  Pending = "pending",
  Fulfilled = "fulfilled",
  Rejected = "rejected",
}

const requestStatus: Status = Status.Rejected;

// type Code = 200 | 201 | 400 | 500;

enum ReqCode {
  Success = 200,
  Created = 201,
  NotFound = 400,
  ServerError = 500,
}

const requestCode: ReqCode = ReqCode.Success;

enum Role {
  Admin = "admin",
  User = "user",
  Guest = "guest",
}

// admin, user, guest
const userRole: Role = Role.User;

interface User {
  username: string;
  role: Role;
}

const user: User = {
  username: "jacob",
  role: Role.Guest,
};
