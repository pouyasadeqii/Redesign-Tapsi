let map = L.map('map').setView([35.788074, 51.375594],17);

L.tileLayer(
    "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    {
      maxZoom: 19,
    }
  ).addTo(map);

  const marker = L.marker([35.788074, 51.375594]).addTo(map);

  let circle = L.circle([35.788074, 51.375594], {
    color: '#ff5722',
    fillColor: '#ff5722',
    fillOpacity: 0.5,
    radius: 15
}).addTo(map);