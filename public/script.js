//variables x, y are determined by position
// of given friend relative to physical center of group

// test at regular interval whether all members are close together!

//declare classes for each player

//an empty array that will received "pushed" player names as soon as you click on their plus sign
//plus sign in the start party screen
var players = ["Bob", "Juanita", "Juana", "Tandon"];
var player_array = []

class Player {
  constructor(name) {
    this.player_name = name;
  }
}

function player_create(name) {
  player = new Player(name)
  return player
}

for (i = 0; i < players.length; i++) {
  p = player_create(players[i]);
  player_array.push(p)
}

// preset how much strayDist is allowed
var strayDist_x, strayDist_y
var username
// this "friends" array can be utilized in the party-making screen of the game!
var friends = [p1, p2, p3, p4, p5, p6, p7, p8, p9, p10]



//see https://developer.mozilla.org/en-US/docs/Web/API/Notification/Notification

function spawnNotification(theBody,theIcon,theTitle) {
  var options = {
      body: theBody,
      icon: theIcon
  }
  var n = new Notification(theTitle,options);
}

function inRoom(x, y){
  if (x >= strayDist_x || y >= strayDist_y) {
    Notification.permission = "granted"
    return False
  }
}

for (i = 0; i < friends.length; i++) {
  if (!inRoom(x, y)) {
    var name = username
  }
}
