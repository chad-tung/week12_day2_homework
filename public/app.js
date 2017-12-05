var initialise = function() {
  var container = document.getElementById('main-map');
  var center = {lat: 55.859112, lng: -4.258109};
  var zoom = 14;

  var mainMap = new MapWrapper(container, center, zoom);
  var paesano = {lat: 55.859665, lng: -4.250580};
  var alistairPlace = {lat: 55.855656, lng: -4.248466};
  var hongKong = {lat: 22.396428, lng: 114.109497};

  var myMarker = mainMap.addMarker(paesano);
  mainMap.addMarker(center);
  mainMap.addMarker(alistairPlace);
  var hongKongMarker = mainMap.addMarker(hongKong);
  mainMap.addClickEvent();

  var infoWindowString = "<h2>One of my many favourite places for food.</h2>"

  var infoWindow = new google.maps.InfoWindow({
    content: infoWindowString
  })

  myMarker.addListener('click', function() {
    infoWindow.open(mainMap, myMarker)
  })

  var myLocation = function() {
    navigator.geolocation.getCurrentPosition(function(position) {
      mainMap.googleMap.setCenter({lat: position.coords.latitude, lng: position.coords.longitude});
      mainMap.addMarker({lat: position.coords.latitude, lng: position.coords.longitude});
    })
  }

  var moveButton = document.getElementById('button-change-location');
  moveButton.addEventListener('click', mainMap.moveLocation.bind(mainMap));

  var bounceButton = document.getElementById('button-bounce-markers');
  bounceButton.addEventListener('click', mainMap.bounceMarkers.bind(mainMap))

  var unbounceButton = document.getElementById('button-unbounce-markers');
  unbounceButton.addEventListener('click', mainMap.unbounceMarkers.bind(mainMap))

  var locationButton = document.getElementById('my-location-button');
  locationButton.addEventListener('click', myLocation);
}

window.addEventListener('load', initialise);
