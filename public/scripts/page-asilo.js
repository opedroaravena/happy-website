const map = L.map("mapid").setView([-20.657584, -43.78812], 16);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

const icon = L.icon({
    iconUrl: "./public/images/map-mark.svg",
    iconSize: [78, 88],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
})

const popup = L.popup({
    closeButton: false,
    className: 'map-popup',
    minWidth: 240,
    minHeight: 240
}).setContent( 'Lar de idosos <a href="asilos.html" class="choose-asilo"> <img src="./public/images/arrow-white.svg" <a/>')

L.marker([-20.657584, -43.78812], { icon })
  .addTo(map)
  .bindPopup(popup)
  
