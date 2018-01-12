const {getUsers,addUser,User} = require('./db');
const users = getUsers();
const user = new User('John','Dow');
console.log(users);
addUser(user);
console.log(users);