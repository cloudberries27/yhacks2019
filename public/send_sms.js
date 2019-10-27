// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
// DANGER! This is insecure. See http://twil.io/secure

function sendText(){
    window.alert("We have alerted your friends that you are in danger and have pushed them your current location. IF THIS IS AN EMERGENCY, PLEASE CONTACT THE POLICE.")
}
var smsSend = document.getElementById('sendMessageButton');
if(smsSend){
  smsSend.addEventListener('click', sendText, false);
}

var ending = document.getElementById('endParty')
ending.onclick = endPart
function endPart(){
    window.alert("You have requested to end your party. Waiting on other members to confirm")
}
