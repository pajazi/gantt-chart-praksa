import { useGetGanttEventsQuery } from '@/redux/slices/ganttSlice'
import FilterBar from '../dashboard/filterBar.js'
//import GanttChart from '../dashboard/ganttChart.js'
import GanttChart from '../dashboard/ganttChart.js'
export default function Home() {
    const { isFetching: isFetchingEvents } = useGetGanttEventsQuery()

    const isFetching = isFetchingEvents

    return (
        <>
            <FilterBar />
            <GanttChart />
        </>
    )
}
