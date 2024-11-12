import { Gantt, Task, EventOption, StylingOption, ViewMode, DisplayOption } from 'gantt-task-react'
import 'gantt-task-react/dist/index.css'
import { useGetGanttEventsQuery } from '@/redux/slices/ganttSlice'
import { useState, useEffect } from 'react'
const GanttChart = () => {
    const [tasks, setTasks] = useState([])
    const { data: events } = useGetGanttEventsQuery()

    console.log(events)

    const array =
        events &&
        events.map((ev) => ({
            name: ev.name,
            id: ev.id,
            start: ev.dateStart ? new Date(ev.dateStart) : null,
            end: ev.dateEnd ? new Date(ev.dateEnd) : null,
            type: ev.status,
            progress: 100,
            isDisabled: true,
            styles: { progressColor: '#ffbb54' },
        }))
    useEffect(() => {
        setTasks(array)
    }, [events])

    console.log('Mapped tasks:', tasks) //nekad je undefined nekad je ok

    //return <Gantt tasks={tasks} />
}
export default GanttChart
