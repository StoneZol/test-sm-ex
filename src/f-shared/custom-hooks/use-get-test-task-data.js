import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { getLogin, getRoutesPoint } from '../end-api/end-api';
import { getData, postData } from '../fetch-methods/get-data';
import { setRefreshToken, setToken } from '../../store/slices/tokens-slice';

const mockdata = {
    id: 740,
    date_start: "2025-02-05 06:13:02",
    date_end: "2025-02-07 17:53:24",
}

const authData = {login: 'testdemo', password: 'demo'}

export default function useGetTestTaskData() {
    const [coordinates, setCoordinates] = useState([])
    const [reserves, setReserves] = useState([])
    const [mapCenter, setMapCenter] = useState([55.751694,37.617218])
    const [error, setError] = useState(null)
    const [needLoad, setNeedLoad] = useState(true)

    const token = useSelector((state) => state.tokens.token);
    const refresh_token = useSelector((state)=> state.tokens.refresh_token)
    const dispatch = useDispatch();

    useEffect(()=>{
        if (token != null){return}
        getData(getLogin, authData)
            .then(data => {
                    dispatch(setToken(data.token))
                    dispatch(setRefreshToken(data.refresh_token))
                            }
                )
            .catch(error => 'Error in hook useGetTestTaskData')

    },[])

    useEffect(()=>{
        if (token === null){return}

        const worker = new Worker(new URL('../workers/worker-get-routes-point.js', import.meta.url));

        worker.onmessage = event => {
            if (event.data.error) {
                setError(event.data.error);
                return;
            }

            const { coordinates, reserves, center } = event.data;
            setCoordinates(coordinates);
            setReserves(reserves);
            setMapCenter(center);
        };

        postData(getRoutesPoint, token, mockdata)
        .then(data => {
            worker.postMessage({ response: data });
        })
        .catch(error => {
            setError('Request failed');
        });

    return () => {
        worker.terminate();
    };

}, [token, needLoad]);
    
  return {coordinates, reserves, mapCenter, setNeedLoad}
}
