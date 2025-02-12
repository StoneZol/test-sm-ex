onmessage = function (e) {
    const { response } = e.data;
    const key = Object.keys(response)[0];

    try {
        const coordinates = [];
        const reserves = [];
        
        response[key][0].route.forEach(item => {
            coordinates.push({lat: item.lat, lng: item.lng});
            reserves.push(item.reserve);
        });

        postMessage({coordinates, reserves});
    } catch (error) {
        postMessage({error: 'Error processing response'});
    }
}
