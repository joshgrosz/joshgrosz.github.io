var map = L.map('map').setView([38.8881, -77.0229], 15);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var hMuseum = L.marker([38.88815,-77.02296]).addTo(map);
hMuseum.bindPopup("Hirshorn Museum - 38.88815,-77.02296").openPopup();
var hExhibit = L.marker([38.88800,-77.02317]).addTo(map);
hExhibit.bindPopup("Hirshhorn Exhibit - 38.88800,-77.02317").openPopup();
var obelisk = L.marker([38.88948, -77.03525]).addTo(map);
obelisk.bindPopup("Obelisk - 38.88948, -77.03525").openPopup();
