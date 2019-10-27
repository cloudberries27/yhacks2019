  const config = {
    apiKey: 'AIzaSyCdbaaXzEJZloTpyb242vvDvn026jQnDyo',
    authDomain: 'diddley-squad.firebaseapp.com',
    databaseURL: 'https://diddley-squad.firebaseio.com',
    projectId: 'diddley-squad',
    storageBucket: 'diddley-squad.appspot.com',
    messagingSenderId: '765373219024',
    appId: '1:765373219024:web:e63c1a883f3d7ba67c9ed5',
  };
  firebase.initializeApp(config);

  var recommendations = firebase.database().ref("user");
  var submitRecommendation = function () {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var phone = document.getElementById('phone').value;

    recommendations.push({
      "name": name,
      "email": email,
      "password": password,
      "phone":phone
    });
  };

  var x = document.getElementById('sendMessageButton');
  x.onclick = function (){submitRecommendation();};
