//variables x, y are determined by position
//of given friend relative to physical center of group

//test at regular interval whether all members are close together!

//declare general class that can be instantiated for each player

class User {
  constructor(partygoer) {
    this.name = partygoer;
    //originally no contact info
    var contact_info = [];
  }

  //add contact info
  set_contact_info() {
    var contact_info = [//new contact info//]
  }

  get_contact_info() {
    //eg. var contact_info = ["Brother", "347 555 9855", "Aunt", "917 555 5555"]
    return contact_info;
  }

  //this method is activated when you tap on friend's image in the
  //"party in progress" screen
  display_image() {
    //insert code here
  }
}

//this creates the image of your profile pic surrounded by your friends!
class CreatePartyWeb {
  constructor(){
    var party_goers  = []
  }

  invite_friends() {
    while (!startGame) {
      partygoer = new User(//type friend name here)
      //this adds all your friends to the party_goers array, which is a list
      //of all people who accepted invitation
      party_goers.push(partygoer)

    }

  }

  link_friends() {
    //code that creates the linked image
  }
}

//creating new party in "start party" screen
class CreateNewParty {
  //this constructor allows you to name the party, display address,
  //and this class can enable certain party app functions based on settings
  //you configure, as well as general rules like the distance one is allowed to
  //drift from other partygoers
  constructor(party_name, address) {
    this.name = party_name;
    this.address = address;
    // preset how much driftDist is allowed
    var driftDist_x, driftDist_y;

  inRoom(x, y){
    if (x >= strayDist_x || y >= strayDist_y) {
      Notification.permission = "granted"
      return False
    }
    for (i = 0; i < party_goers.length; i++) {
      if (!inRoom(x, y)) {
        var name = username
      }
    }

  display(party_name)
  }
}

//notify other party members if partygoer drifts too far according to parameters
//dictated in "CreateNewParty" class
class DriftNotify extends CreateNewParty {
  constructor(){
    super();
  }

  //see https://developer.mozilla.org/en-US/docs/Web/API/Notification/Notification
  spawnNotification(theBody,theIcon,theTitle) {
    var options = {
      body: theBody,
      icon: theIcon
    }
    var n = new Notification(theTitle,options);
  }
}

class DisplayEmergContacts {

}

class PanicButton {

}


class EndParty{
  //end party if all players tap "agree"
}
