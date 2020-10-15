const options = {
    dragging: false,
    touchZOom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false
}


const map = L.map("mapid", options).setView([-20.657584, -43.78812], 16);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

const icon = L.icon({
    iconUrl: "./public/images/map-mark.svg",
    iconSize: [78, 88],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
})



L.marker([-20.657584, -43.78812], { icon })
  .addTo(map)

  
