
//const users = ['Alex','John','Bob'];
/*const users = require('./notes.json');
function getUsers(){
    return users;
}
module.exports.getUsers = getUsers;
console.log(module);*/

const users = ['Alex','John','Bob'];
function getUsers(){
    return users;
}
class User{
    constructor(firstname,lastname){
        this.firstname = firstname;
        this.lastname = lastname;
    }
}
module.exports = {
    User,//якщо експортувати клас під іншим імям, то потрібно так UserClasname:User
    users,//екпортуємо у вигляді обєкта
    getUsers
};
//console.log(module);