var initialise = function() {
  var container = document.getElementById('main-map');
  var center = {lat: 55.856946, lng: -4.244088};
  var zoom = 12;
  var mainMap = new MapWrapper(container, center, zoom);
  var paesano = {lat: 55.859665, lng: -4.250580};
  var alistairPlace = {lat: 55.855656, lng: -4.248466};
  mainMap.addMarker(paesano);
  mainMap.addMarker(center);
  mainMap.addMarker(alistairPlace);
  mainMap.addClickEvent();

  var bounceButton = document.getElementById('button-bounce-markers');
  bounceButton.addEventListener('click', mainMap.bounceMarkers.bind(mainMap))
}

window.addEventListener('load', initialise);
