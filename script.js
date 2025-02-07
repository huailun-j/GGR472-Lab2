mapboxgl.accessToken = 'pk.eyJ1IjoiaHVhaWx1biIsImEiOiJjbTVvOTJvNzAwZnJrMmtwdGpkMzRvdmk1In0.TnWy4ZzmPCKAX1aYKDWMaQ'; // Add default public map token from your Mapbox account

const map = new mapboxgl.Map({
    container: 'my-map', // map container ID
    style: 'mapbox://styles/huailun/cm6u8eo2k001p01s3bta5ehol', // style URL
    center: [-79.39, 43.73], // starting position [lng, lat], change this for centred map
    zoom: 10, // starting zoom level
});


map.on('load', () => {
    //add data source from GeoJSON data, about the cycling network data
    map.addSource('network-data', {
        type: 'geojson',
        data: 'https://raw.githubusercontent.com/huailun.j/GGR472-Lab2/main/cycling-network.geojson' 
     
    });

     // Add a layer to show the cycling network lines
     map.addLayer({
        'id': 'network-line', 
        'type': 'line', 
        'source': 'network-data', 
        'paint': {
            'line-color': '#2f7dca', 
            'line-width': 3, 
            'line-opacity': 1 
        }
    });
    

    //add another data source from GeoJSON data, which is the bicycle parking racks 
    map.addSource('parking-data', {
        type: 'geojson',
        data: 'https://raw.githubusercontent.com/huailun.j/GGR472-Lab2/main/Bicycle-Parking-Racks-Data.geojson' 

    });
    // Add a layer for bicycle parking rack, points
    map.addLayer({
        'id': 'parking-point', 
        'type':'circle', 
        'source': 'parking-data', 
        'paint': {
            'circle-color': '#f014ae', 
            'circle-opacity': 0.1, 
            'circle-radius': 10 
        }
        
    });

    
});




map.on('load', () => {
    
    // Add a data source containing GeoJSON data
    map.addSource('cyclying-network', {
        type: 'geojson',
        data: {
            "type": "FeatureCollection",
            "features": [
                {
                    "type": "Feature",
                    "properties": {
                        "name": "Sidney Smith Hall"
                    },
                    "geometry": {
                        "coordinates": [
                            -79.39865237301687,
                            43.662343395037766
                        ],
                        "type": "Point"
                    }
                }
            ]
        }
    });
    
    map.addLayer({
        'id': 'uoft-pnt',
        'type': 'circle',
        'source': 'uoft-data',
        'paint': {
            'circle-radius': 6,
            'circle-color': '#B42222'
        }
    
    });

});
