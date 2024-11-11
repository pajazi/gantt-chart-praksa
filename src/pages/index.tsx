import { useGetGanttEventsQuery } from '@/redux/slices/ganttSlice'

export default function Home() {
    const { isFetching: isFetchingEvents } = useGetGanttEventsQuery()

    const isFetching = isFetchingEvents

    return 'Hello World'
}
