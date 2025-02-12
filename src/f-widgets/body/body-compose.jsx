import useGetTestTaskData from "../../f-shared/custom-hooks/use-get-test-task-data"

export default function BodyCompose({children}) {

    const {coordinates, reserves} = useGetTestTaskData()
    console.log(coordinates)
    console.log(reserves)
  return (
    <div> типа тело{children}</div>
  )
}
