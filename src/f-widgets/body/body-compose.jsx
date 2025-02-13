import { useState } from "react"
import useGetTestTaskData from "../../f-shared/custom-hooks/use-get-test-task-data"
import Graph from "./ui/graph/ui/graph"
import Map from "./ui/map/ui/map"

export default function BodyCompose({children}) {

    const {coordinates, reserves, mapCenter, setMapCenter} = useGetTestTaskData()

    const [mapMarker, setMapMarker] = useState(null)

    const handlePointClick = (index) => {
        setMapCenter(coordinates[index]);
        setMapMarker(coordinates[index])
      };

    return (
        <div>
            <Map routes={coordinates} center={mapCenter} marker={mapMarker}/>
            <Graph data={reserves} onPointClick={handlePointClick}/>
        </div>
    )
}
