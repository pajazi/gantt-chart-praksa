import { useGetGanttEventsQuery } from '@/redux/slices/ganttSlice'
import Filters from '../components/filters.js'
export default function Home() {
    const { isFetching: isFetchingEvents } = useGetGanttEventsQuery(undefined)

    const isFetching = isFetchingEvents
    console.log(isFetching)

    return (
        <>
            <Filters></Filters>
        </>
    )
}
