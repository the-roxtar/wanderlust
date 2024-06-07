
	mapboxgl.accessToken = mapToken

    const map = new mapboxgl.Map({
        container: 'map', // container ID
        //Choose from Mapbox's core styles, or make your own style with Mapbox Studio
        styles: "mapbox://styles/mapbox/streets-v12", //style URL
        center: listing.geometry.coordinates, // starting position [lng, lat]
        zoom: 10 // starting zoom
    });


    const marker = new mapboxgl.Marker({color: "red"})
        .setLngLat(listing.geometry.coordinates) //Listing.geometry.coordinate
        .setPopup(new mapboxgl.Popup({offset: 25})
        .setHTML(`<h4>${listing.title}</h4><p>Exact location will be provided after booking</p>`))
        .addTo(map);