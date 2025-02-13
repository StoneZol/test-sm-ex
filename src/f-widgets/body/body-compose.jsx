import useGetTestTaskData from "../../f-shared/custom-hooks/use-get-test-task-data"
import Graph from "./ui/graph/ui/graph"
import Map from "./ui/map/ui/map"

export default function BodyCompose({children}) {

    const {coordinates, reserves, mapCenter} = useGetTestTaskData()
    console.log(reserves.slice(0, 10))
    return (
        <div>
            <Map routes={coordinates} center={mapCenter}/>
            <Graph data={reserves}/>
        </div>
    )
}
