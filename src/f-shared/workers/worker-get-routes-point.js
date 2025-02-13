onmessage = function (e) {
    const { response } = e.data;
    const key = Object.keys(response)[0];

    try {
        const coordinates = [];
        const reserves = [];
        
        response[key][0].route.forEach(item => {
            coordinates.push([item.lat, item.lng]);
            reserves.push(item.reserve);
        });

        const center = coordinates.reduce(
            (acc, [lat, lng]) => {
                acc[0] += lat;
                acc[1] += lng;
                return acc;
            }, 
            [0, 0]
        ).map(val => val / coordinates.length);

        postMessage({coordinates, reserves, center});
    } catch (error) {
        postMessage({error: 'Error processing response'});
    }
}
