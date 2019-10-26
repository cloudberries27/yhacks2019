class User {
  constructor(name, email, password, phone) {
    this.name = name;
    this.email = email;
    this.password = password;
    this.phone = phone;
    this.location = ' ';
    this.friends = [];
  }
  addFriends(user){
    this.friends.push(user);
  }
  get Friends(){
    return this.friends;
  }
}
// document.getElementbyID('sendMessageButton').onclick
var x = document.getElementById('sendMessageButton');
var name = document.getElementById('name');
var email = document.getElementById('email');
var password = document.getElementById('password');
var phone = document.getElementById('phone');

x.onclick = function () {createUser(name.value,email.value,password.value,phone.value);};

function createUser(name, username, password, phone){
  var person = new User(name, username, password, phone);
  console.log(person);
}
