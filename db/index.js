const db = require('./db.js');//якщо потрібні тільки функції, то
//const {getUsers, addUser} = require('./db');
const User = require('./user.js');//після того як модулі завантаженні вони кешуются в тому ж порядку
module.exports = {//тут передаються функції і дані, які мають бути доступні
//якщо передаються фунції, то можна ще так:    
    getUsers:db.getUsers,
    addUser:db.addUser,
    User
};