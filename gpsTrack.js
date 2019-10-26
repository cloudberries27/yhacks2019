var IPGeolocationAPI = require('ip-geolocation-api-javascript-sdk');
const apiKey = '951cd492488f476e8cdbac21c9916f6e';

var ipgeolocationApi = new IPGeolocationAPI(apiKey, false);

// Function to handle response from IP Geolocation API
function handleResponse(json) {
  console.log(obj.result);
}


var GeolocationParams = require('ip-geolocation-api-javascript-sdk/GeolocationParams.js');

// Get complete geolocation for the calling machine's IP address
ipgeolocationApi.getGeolocation(handleResponse);
