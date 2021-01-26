var map = L.map(document.getElementById('mapDiv'), {
    center: [-25.4289541, -49.267137],
    zoom: 15
});

var basemap = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png',{
});
    basemap.addTo(map);

var overlays = {
    'Parques e Bosques': parks_woods,
}