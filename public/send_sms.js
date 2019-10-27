// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
// DANGER! This is insecure. See http://twil.io/secure


function send_sms(){
  const accountSid = 'AC5e2c3a4b2bdecf513fedce64b4a88e69';
  const authToken = '8d24fed32aaac7db392d4a9547ff9747';
  const client = require('twilio')(accountSid, authToken);

  client.messages
    .create({
      body: 'Hi, Claudia! This is Jamie from YHack, and Im on my way to assist you!',
      from: '+15594782867',
      to: '+19146400721'
    })
    .then(message => console.log(message.sid));
}
