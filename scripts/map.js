var map = L.map('map').setView([38.8881, -77.0229], 15);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var hMuseum = L.marker([38.88815,-77.02296]).addTo(map);
var hExhibit = L.marker([38.88800,-77.02317]).addTo(map);
var obelisk = L.marker([38.88948, -77.03525]).addTo(map);
