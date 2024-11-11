import { useGetGanttEventsQuery } from '@/redux/slices/ganttSlice'
import FilterBar from '../components/filterBar.js'
export default function Home() {
    const { isFetching: isFetchingEvents } = useGetGanttEventsQuery()

    const isFetching = isFetchingEvents

    return (
        <>
            <FilterBar></FilterBar>
        </>
    )
}
