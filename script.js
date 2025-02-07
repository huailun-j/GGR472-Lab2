mapboxgl.accessToken = 'pk.eyJ1IjoiaHVhaWx1biIsImEiOiJjbTVvOTJvNzAwZnJrMmtwdGpkMzRvdmk1In0.TnWy4ZzmPCKAX1aYKDWMaQ'; // Add default public map token from your Mapbox account

const map = new mapboxgl.Map({
    container: 'my-map', // map container ID
    style: 'mapbox://styles/huailun/cm6u8eo2k001p01s3bta5ehol', // style URL
    center: [-79.39, 43.73], // starting position [lng, lat], change this for centred map
    zoom: 10, // starting zoom level
});


map.on('load', () => {
    //add the first data source containing cycling network GeoJSON data
    map.addSource('network-data', {
        type: 'geojson',
        data: 'https://huaijun-j.github.io/GGR472-Lab2/cycling-network.geojson' 

    });

     // Add a layer to display the cycling network lines
     map.addLayer({
        'id': 'network-line', // Unique ID for the layer
        'type': 'line', // Type of layer (line)
        'source': 'network-data', // Source of the layer data
        'paint': {
            'line-color': '#2f7dca', // Color of the lines
            'line-width': 3, // Width of the lines
            'line-opacity': 1 // Opacity of the lines
        }
    });
    

    //add the second data source containing parking racks GeoJSON data
    map.addSource('parking-data', {
        type: 'geojson',
        data: 'SHOULD A LINK HERE' 

    });
    // Add a layer to display the parking rack points
    map.addLayer({
        'id': 'parking-point', // Unique ID for the layer
        'type':'circle', // Type of layer (point)
        'source': 'parking-data', // Source of the layer data
        'paint': {
            'circle-color': '#f014ae', // Color of the circles
            'circle-opacity': 0.1, // Opacity of the circles
            'circle-radius': 10 // Radius of the circles
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
