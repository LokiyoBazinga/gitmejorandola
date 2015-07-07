function initialize()
{
  var mapProp = {
    center: new google.maps.LatLng(20.686613100000000000,-103.350787200000010000),
    zoom:11,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    scrollwheel: false,
  };
  var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
}

function setMarker()
{	
	var mapProp = {
    center: new google.maps.LatLng(20.689226,-103.364046),
    zoom:16,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    scrollwheel: false,
  };
  var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
	var myCenter= new google.maps.LatLng(20.689226,-103.364046);
	var marker=new google.maps.Marker({
  		position:myCenter,
  		zoom: 15,
  	});

	marker.setMap(map);
	var infowindow = new google.maps.InfoWindow({
  content:"Manuel Cambre #1785,local 10"
  });

infowindow.open(map,marker);
}
function setMarkers()
{	
	var mapProp = {
    center: new google.maps.LatLng(20.6891995,-103.3676817),
    zoom:16,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    scrollwheel: false,
  };
  var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
	var myCenter= new google.maps.LatLng(20.6891995,-103.3676817);
	var marker=new google.maps.Marker({
  		position:myCenter,
  		zoom: 15,
  	});

	marker.setMap(map);
	var infowindow = new google.maps.InfoWindow({
  content:"Jesus Garcia #1646"
  });

infowindow.open(map,marker);
}

function loadScript()
{
  var script = document.createElement("script");
  script.type = "text/javascript";
  script.src = "http://maps.googleapis.com/maps/api/js?key=&sensor=false&callback=initialize";
  document.body.appendChild(script);
}


window.onload = loadScript;
