import { MapContainer,Polyline, TileLayer,Marker, useMap} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import styles from './map.module.scss'
import L from 'leaflet';

import React, { useEffect} from 'react'

function MapView({ center }) {
    const map = useMap();

    useEffect(() => {
        if (center) {
            map.setView(center, map.getZoom()); 
        }
    }, [center, map]);

    return null;
}

const markerIcon = new L.Icon({
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
});

export default function Map({routes = [],center, marker}) {
    const newArr =[routes]
    return (
        <div className={styles.map_box} id='map'>
            <MapContainer  center={center} zoom={9} scrollWheelZoom={true} className={styles.map_container}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
                    <MapView center={center} />
                    {newArr.map((route, index) => (
                <Polyline key={index} pathOptions={{weight: 2, color: 'red'}} positions={route}/>
                ))}
                {marker && <Marker position={marker} icon={markerIcon} />}
            </MapContainer>
        </div>
    )
}