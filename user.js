class User {
  constructor(name, email, password) {
    this.name = name;
    this.email = email;
    this.password = password;
    this.friends = [];
  }
  addFriends(user){
    this.friends.push(user);
  }
  get Friends(){
    return this.friends;
  }
}
var person1 = new User('Serena','sv1419@nyu.edu','aidan930')

var person2 = new User('Claudia','ccr330@nyu.edu','qwer5678')
document.getElementById("check1").addEventListener("mousedown",gotEM());

function gotEM(){
  person1.addFriends(person2);
  console.log(person1.Friends);
}
