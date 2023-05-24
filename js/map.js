map = new OpenLayers.Map('mapdiv');
map.addLayer(new OpenLayers.Layer.OSM());
var lonLat = new OpenLayers.LonLat(16.87946, 50.34371).transform(
	new OpenLayers.Projection('EPSG:4326'), // transform from WGS 1984
	map.getProjectionObject() // to Spherical Mercator Projection
);
var zoom = 14;
var markers = new OpenLayers.Layer.Markers('Markers');
map.addLayer(markers);
markers.addMarker(new OpenLayers.Marker(lonLat));
map.setCenter(lonLat, zoom);
