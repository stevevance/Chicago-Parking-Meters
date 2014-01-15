function popUp(feature, layer) {
	var content = "<p><b>" + feature.properties.address + "</b></p>";
	content += "<p>" + feature.properties.parkingspaces + " parking spaces</p>";
	content += "<p>" + feature.properties.dayratehour + " per hour, limit " + feature.properties.daytimelimit + "</p>";
	layer.bindPopup(content);
}

var map = new L.Map('map',{
	    attributionControl:false,
	    maxZoom:18,
	    minZoom:12,
	    zoomControl:true,
	    trackResize:true,
	    touchZoom:true,
	    center:[41.888866593458445,-87.63662030006833],
	    zoom:17
    });

var markerGroup = new L.MarkerClusterGroup();
map.addLayer(markerGroup);

var cartoTable = "http://stevevance.cartodb.com/api/v2/sql?q=SELECT the_geom, address, dayratehour, daytimelimit, parkingspaces FROM chicagoparkingmeters&format=geojson";
var geojsonLayer = L.geoJson.ajax(cartoTable,{onEachFeature:popUp});
//{onEachFeature:popUp}

var remoteTiles = 'http://{s}.tiles.mapbox.com/v3/stevevance.ChicagoBikeGuide/{z}/{x}/{y}.png';
var osmTiles = "http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
var tilesOptions = {
		unloadInvisibleTiles:false,
	    reuseTiles:false,
	    updateWhenIdle:false,
		// I can't tell if any of the above three options make a difference; I think leaving them as default makes it load faster
	    detectRetina:true,
	    minZoom:12,
	    maxZoom:18,
	    tms:false
    };
var tilesLayer = new L.TileLayer(remoteTiles,tilesOptions).addTo(map);

geojsonLayer.on('data:loaded', function() {
    //alert("data loaded");
    markerGroup.addLayer(geojsonLayer);
});


setTimeout(function() {
	//markerGroup.addLayer(geojsonLayer);
}, 100)


//geojsonLayer.addTo(map);