import hashPassword from "../utils/hashPassword.js";
const Users = [
  {
    name: "Admin",
    email: "admin@example.com",
    password: hashPassword("123456"),
    isAdmin: true,
  },
  {
    name: "User",
    email: "user@example.com",
    password: hashPassword("123456"),
  },
];

export default Users;
