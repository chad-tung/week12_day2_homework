var initialise = function() {
  var container = document.getElementById('main-map');
  var center = {lat: 55.856946, lng: -4.244088};
  var zoom = 12;
  var mainMap = new MapWrapper(container, center, zoom);
  var paesano = {lat: 55.859665, lng: -4.250580};
  var alistairPlace = {lat: 55.855656, lng: -4.248466};
  var myMarker = mainMap.addMarker(paesano);
  mainMap.addMarker(center);
  mainMap.addMarker(alistairPlace);
  mainMap.addClickEvent();

  var infoWindowString = "<h2>One of my many favourite places for food.</h2>"

  var infoWindow = new google.maps.InfoWindow({
    content: infoWindowString
  })

  myMarker.addListener('click', function() {
    infoWindow.open(mainMap, myMarker)
  })

  var bounceButton = document.getElementById('button-bounce-markers');
  bounceButton.addEventListener('click', mainMap.bounceMarkers.bind(mainMap))

  var unbounceButton = document.getElementById('button-unbounce-markers');
  unbounceButton.addEventListener('click', mainMap.unbounceMarkers.bind(mainMap))
}

window.addEventListener('load', initialise);
