import { MapContainer,Polyline, TileLayer, useMap} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import styles from './map.module.scss'

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

export default function Map({routes = [],center}) {
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
            </MapContainer>
        </div>
    )
}